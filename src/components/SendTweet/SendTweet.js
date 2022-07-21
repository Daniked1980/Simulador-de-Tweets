import React,{useState} from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import moment from "moment";
import ModalContainer from "../ModalContainer";
import FormSendTweet from "../FromSendTweet";
import "./SendTweet.scss";
import { TWEETS_STORAGE } from "../../utils/Contants";
export default function SendTweet(props) {
    const [isOpenModal,setIsOpenModal ]=useState(false);
    const {setToastProps, allTweets}=props;


    const openModal=()=>{
    setIsOpenModal(true);
    };
    const closeModal =()=> {
    setIsOpenModal(false);
    };

    const sendTweet=(event, formValue)=> {
        event.preventDefault();
        const {name, tweet }=formValue;
    
        let allTweetsArray =[] ;

        if(allTweets) {
            
            allTweetsArray=allTweets;
        }


        if(!name || !tweet ) {
            console.log("WARNING:todos los campos son obligatorios");
            setToastProps({
                open: true,
                text: ("WARNING:todos los campos son obligatorios")
            })
          }  else{
            formValue.time= moment();
            allTweetsArray.push(formValue);
            localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweetsArray));
            console.log("Tweet enviado correctamente");
            setToastProps({
                open: true,
                text: ("Tweet enviado correctamente")
            })
            closeModal();
            
            allTweetsArray=[];
        }

    
    }


    
    return (
        <div className="sendtweet">  
        <Fab className="sendtweet__open-modal"
        color="primary" 
        aria-label="add"
        onClick={openModal}>
        <AddIcon/>
        </Fab>
        <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
        <p> Contenido del modal </p>
        <FormSendTweet sendTweet={sendTweet}/>
        </ModalContainer>
        
          
        </div>
    );
    
}
