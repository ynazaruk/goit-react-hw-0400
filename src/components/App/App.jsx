import { useState, useEffect } from 'react';
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from '../ImageGallery/ImageGallery';
import { Toaster } from 'react-hot-toast'

import { getData } from '../../gallery-api';

export default function App() {
    const [images, setImages] = useState([])
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1)
    const [error, setError] = useState(null);
    const [showBtn, setShowBtn] = useState(false);
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
            // setLoading(false);
          }
        };
        fetchData();
        } else {
        //   setShowBtn(false);
      }
      }, [query, page]);

    const handleSubmit = async (newQuery) => {
        setQuery(newQuery);
        setImages([]);

    }

    return (
        <div>
            <Toaster />
            <SearchBar onSubmit={handleSubmit}/>
            <ImageGallery images={images} />
            
        </div>
        
    )
}