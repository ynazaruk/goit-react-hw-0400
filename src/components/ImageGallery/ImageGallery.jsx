import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css"

export default function ImageGallery({images, onImageClick}) {
    return (
        <ul className={css.gallery}>
        {images.map((image) =>
            <li key={image.id}>
                <div>
                    <ImageCard
                        key={image.id}
                        image={image}
                        onClick={() => onImageClick(image)} />
                </div>
            </li>
        )}
    </ul>
    );   
};