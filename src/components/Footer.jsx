import React, { useState } from "react";
import linkedin from "../media/linkedin.png";
import github from "../media/github.png";
import Modal from "react-modal";

const Footer = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const customStyles = {
        content: {
            width: "60%",
            height: "400px",
            color: "white",
            backgroundColor: "#01b4e4",
            textAlign: "center",
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };
    return (
        <div className="footer">
            <Modal isOpen={modalIsOpen} style={customStyles} ariaHideApp={false}>
                <button onClick={() => setModalIsOpen(false)} style={{backgroundColor: "#0d253f", color: "white"}}>Fermer la modal</button>
                <div className="attribtion_db" style={{marginTop: "10%", fontSize:"large"}}>
                    <p>Ce produit utilise l'API TMDb mais n'est pas approuvé ou certifié par TMDb.</p>
                    <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
                </div>
            </Modal>
            <button style={{ backgroundColor: "#01b4e4", color: "white", fontWeight: "bolder" }} onClick={() => setModalIsOpen(true)}>À propos</button>
            <a href="https://www.linkedin.com/in/stambouli-d%C3%A9veloppeur/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="icone linkedin" />
            </a>
            <a href="https://github.com/STAM0283" target="_blank" rel="noopener noreferrer" >
                <img src={github} alt="icone linkedin" />
            </a>
        </div>
    )
}

export default Footer; 