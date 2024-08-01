import { useState, useEffect } from 'react';
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from '../ImageGallery/ImageGallery';
import { Toaster } from 'react-hot-toast'
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';


import {getData} from "../../gallery-api"

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
        if (query.trim() === '') {
          return;
        }

          const fetchData = async () => {
          try {
            setLoading(true);
            const response = await getData(query, page);
            setImages(prevImages => [...prevImages, ...response]);
            setShowBtn(response.length > 0);
          } catch (error) {
            setError(true);
          } finally {
           setLoading(false);
          }
        };
        fetchData();
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
      <div>
      <Toaster />
      <SearchBar onSubmit={handleSubmit} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && 
        <ImageGallery images={images} onImageClick={openModal} />
      }
      {showBtn && <LoadMoreBtn onLoadMore={loadMoreImages} />}
      <ImageModal isOpen={isModalOpen} imageUrl={selectedImage} altText="Selected Image" closeModal={closeModal} />
    
    </div>
    )
}