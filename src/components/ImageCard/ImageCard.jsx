import css from "./ImageCard.module.css"

export default function ImageCard({image, openModal}) {
    return (
    <div className={css.card}>
        <img src={image.urls.small} alt={image.description} onClick={() => openModal(image.urls.regular)} />
    </div>
    )
}