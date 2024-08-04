import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css"

export default function ImageGallery({images, onImageClick}) {
    return (
        <ul className={css.gallery}>
        {images.map((image) =>
            <li key={image.id}>
                   <ImageCard image={image} openModal={onImageClick} />
            </li>
        )}
    </ul>
    );   
}