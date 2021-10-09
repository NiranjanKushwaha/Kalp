import React, { useState } from "react";
import Modal from "react-modal";
const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "silver",
    zIndex:1000
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#fff",
    width:"100%",
    height:"100%",
    padding:"1rem",
    marginTop:"2rem"
  },
};
Modal.setAppElement("#root");

const FullBodyModal = ({ showFullBodyModal }) => {
  const [modalIsOpen, setIsOpen] = useState(showFullBodyModal);
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="modal_container">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <div className="modal-header">
            <span style={{ color: "green" }}>
              Testimonial Details
            </span>
            <button onClick={closeModal} className="btn-close"></button>
          </div>
          <div>
            <img src="https://www.pngfind.com/pngs/m/61-619937_happy-person-jumping-png-happy-woman-transparent-background.png" alt="happy_img" className="img-fluid  w-100 h-10" />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default FullBodyModal;
