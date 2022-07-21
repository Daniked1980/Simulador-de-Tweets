import React from "react";
import { Grid } from "@mui/material";
import "./ListTweets.scss";
import Tweets from "../Tweets";
export default function ListTweets (props) {
    const { allTweets, deleteTweet } = props;

    if(!allTweets || allTweets.length === 0) {
        return (
            <div className="list-tweets-empty">
                <h2> No hay tweets...</h2>
            </div>
        );
    }
    return (    
        <Grid container spacing={3} className="list-tweets">
         {allTweets.map((tweet,index)=>(
         <Grid key={index} item xs={4}>
            <Tweets tweet={tweet} index={index} deleteTweet={deleteTweet}
            
            />
         </Grid>

         ))}
         </Grid>
    );
  }