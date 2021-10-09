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
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#fff",
    width:"90%",
    height:"30rem",
    padding:"1rem",
    marginTop:"2rem"
  },
};
Modal.setAppElement("#root");

const EnqModel = ({ showModal }) => {
  const [modalIsOpen, setIsOpen] = useState(showModal);
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
              PLEASE ENTER YOUR DETAILS BELOW
            </span>
            <button onClick={closeModal} className="btn-close"></button>
          </div>
          <div>
            <form className="text-center enquery-form">
              <input  type="text" name="name" placeholder="Enter your name"  />
              <br /> <br />
              <input  type="text" name="email" placeholder="Enter your name"  />
              <br /> <br />
              <input  type="number" name="mobile" placeholder="Enter Mobile number"  />
              <br /> <br />
              <textarea name="query"  cols="40" rows="5"></textarea>
              <br /> <br />
              <button type="submit" className="btn btn-outline-info hvr-rectangle-in">Submit Query</button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EnqModel;
