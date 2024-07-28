import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({images, onImageClick}) {
    if(images.length === 0) {
        return null;
    }
    
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