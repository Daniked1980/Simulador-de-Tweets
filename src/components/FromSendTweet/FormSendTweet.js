import React, { useState } from "react";
import { FormControl, FormGroup, TextField, Button } from "@mui/material";
import "./FormSendTweet.scss";
export default function FormSendTweet(props) {
    const { sendTweet } = props;
    const [formVaule, setFormValue] = useState({
        name: "",
        tweet: ""
    });

    const onFormChange = event => {
        setFormValue({
            ...formVaule,
            [event.target.name]: event.target.value
        })
    }


    return (
        <div className="formsendtweet">
            <h2 className="form-send-tweet_title">Enviar Tweet</h2>
            <form
                className="form-send-tweet_form"
                onSubmit={(event) => sendTweet(event, formVaule)}
                onChange={onFormChange}>
                <FormControl>
                    <FormGroup>
                        <TextField
                            className="form-send-tweet_form-name"
                            type="text"
                            name="name"
                            placeholder="nombre de usuario"
                            margin="normal" />
                    </FormGroup>
                    <FormGroup>
                        <TextField className="form-send-tweet_form-textarea"
                            name="tweet"
                            multiline
                            rows="6"
                            placeholder="Escribe tu tweet..."
                            margin="normal" />
                    </FormGroup>
                    <FormGroup>
                        <Button type="Submit">
                            Enviar Tweet
                        </Button>
                    </FormGroup>

                </FormControl>

            </form>
        </div>
    );
}
