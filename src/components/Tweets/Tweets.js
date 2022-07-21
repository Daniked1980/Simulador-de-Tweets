import React from "react";
import {Card, CardContent } from "@mui/material";
import moment from "moment" ;
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import "./Tweets.scss"
export default function Tweets(props){ 
    const { tweet: { name, tweet,time},index, deleteTweet} =props; 
    return (
        <Card className="tweet">
<CardContent>
    <div className="tweet_header">
        <h5>{name}</h5>
   <DeleteTwoToneIcon onClick={()=>deleteTweet (index)}/>
   </div>
   <p>{tweet} </p>
   <div className="tweet_date-add-tweet">
   {moment(time).format("DD/MM/YYYY HH:mm")} 
      </div>



    
</CardContent>

        </Card>
    )

}