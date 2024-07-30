import { useState, useEffect } from 'react';
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from '../ImageGallery/ImageGallery';
import { Toaster } from 'react-hot-toast'
import Loader from '../Loader/loader';
import { getData } from '../../gallery-api';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';

import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';

export default function App() {
    const [images, setImages] = useState([])
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1)
    const [error, setError] = useState(null);
    const [showBtn, setShowBtn] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);




    useEffect(() => {
        if (query !== '') {
          const fetchData = async () => {
          setLoading(true);
          try {
            const { data, total_pages } = await getData(query, page);
              if (page === 1) {
                setImages(data);
                
            } else {
              setImages(prevImages => [...prevImages, ...data]);
            }
            setShowBtn(total_pages && total_pages !== page);
          } catch (error) {
            setError(error.message);
          } finally {
           setLoading(false);
          }
        };
        fetchData();
        } else {
         setShowBtn(false);
      }
      }, [query, page]);

    const handleSubmit = (newQuery) => {
        setQuery(newQuery);
        setPage(1);
        setImages([]);

    }

    const loadMoreImages = () => {
      setPage(prevPage => prevPage + 1);
    };
    const openModal = (imageUrl) => {
      setSelectedImage(imageUrl);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setSelectedImage(null);
      setIsModalOpen(false);
    };
    
    return (
      <div className="app">
      <Toaster />
      <SearchBar onSubmit={handleSubmit} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={openModal} />
      )}
      {showBtn && <LoadMoreBtn onLoadMore={loadMoreImages} />}
      {isModalOpen && (
        <ImageModal
          image={selectedImage}
          onClose={closeModal}
        />
      )}
      {/* <div ref={lastImageRef} />
       */}
    </div>
    )
}