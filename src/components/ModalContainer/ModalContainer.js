import React from "react";
import {Modal} from "@mui/material";
import "./ModalContainer.scss";


export default function ModalContainer(props){
    const {isOpenModal, closeModal, children}=props;

    return (
        <Modal
       
        className="modalcontainer"
        open={isOpenModal}
        onClose={closeModal}
        closeAfterTransition>
        <div>
            {children}

        </div>
         </Modal>
        

    );
}