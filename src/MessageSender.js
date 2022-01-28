import { Avatar } from '@mui/material';
import React , {useState} from 'react';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import "./MessageSender.css"
import { collection, addDoc,Timestamp  } from "firebase/firestore"; 
import db from './firebase'
import {useStateValue} from './StateProvider'

function MessageSender() {
    const [{user},dispatch]= useStateValue();
    const [input,setInput] = useState("");
    const [imageUrl,setImageUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add a new document with a generated id.
        const docRef =  addDoc(collection(db, "posts"), {
        message: input,
        profilePic: user.photoURL,
        username: user.displayName,
        image: imageUrl,
        timestamp: Timestamp.fromDate(new Date()),
  }).then((response)=>{
         console.log(response)
  });
  
        setInput("");
        setImageUrl("");
    }
  return <div className='messageSender'>
      <div className='messageSender__top'>
      <Avatar/>
      <form>
          <input
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          className='messageSender__input'
          placeholder={`What's on your mind?`}
          />
          <input
          value={imageUrl}
          onChange={(e)=>setImageUrl(e.target.value)}
          placeholder='image URL(Optional)'/>
          <button onClick={handleSubmit} type='submit'>
           Hidden Submit
          </button>
      </form>
      </div>
      <div className='messageSender__bottom'>
          <div className='messageSender__option'>
                <VideocamIcon style={{color:"red"}}/>
                <h3>Live Video</h3>
                
          </div>
          <div className='messageSender__option'>
                <PhotoLibraryIcon style={{color:"green"}}/>
                <h3>Photo/Video</h3>
                
          </div>
          <div className='messageSender__option'>
                <InsertEmoticonIcon style={{color:"orange"}}/>
                <h3>Feeling/Activity</h3>
                
          </div>
          
      </div>
  </div>;
}

export default MessageSender;
