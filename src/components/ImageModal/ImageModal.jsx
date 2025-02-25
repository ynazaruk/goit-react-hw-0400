import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(15, 15, 16, 0.6)",
  },
  };

  Modal.setAppElement("#root");

export default function ImageModal({ isOpen, imageUrl, altText, closeModal }) {

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
          closeModal();
        }
      };
      const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
          closeModal();
        }
      };
         
    return (
      <div>
      <Modal
      isOpen={isOpen}
      style={customStyles}
      contentLabel="Image Modal"
      onRequestClose={closeModal}
      onKeyDown={handleKeyDown}
      onClick={handleOverlayClick}
    >
      <img src={imageUrl} alt={altText} />
    </Modal>
    </div>
    );
}