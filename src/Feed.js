import React, { useEffect, useState } from 'react';
import "./Feed.css"
import StoryReel from './StoryReel';
import MessageSender from './MessageSender'
import Post from './Post';
import db from './firebase';
// import { collection, getDocs,orderBy } from "firebase/firestore";
import { doc, onSnapshot, collection,query,orderBy } from "firebase/firestore";
function Feed() {
  const [posts,setPosts] = useState([]);
  useEffect(()=>{
    const postsRef = collection(db, "posts");
    const q = query(postsRef, orderBy("timestamp","asc"));
      //   getDocs(collection(db, "posts")).then((querySnapshot)=>{
        
      //     querySnapshot.forEach((doc)=>{
      //       setPosts([doc.data()])
      //       console.log([doc.data])
      //       })
      // });
      // .orderBy("timestamp","desc"),

      const getData = onSnapshot(
        q, 
        (snapshot) => {
        setPosts(snapshot.docs.map((doc)=>({
          id:doc.id,
          data:doc.data(),
        }))) 
        },
        (error) => {
          console.log(error)
        });
  },[]);
   
  return <div className='feed'>
      <StoryReel/>
      <MessageSender/>
      {/* Posts */}
      {/* { posts.map(post => <div>{post.message}</div>)
} */}
{posts.length}
    
      
      {posts.map((post)=>(
        
        <Post
        key={post.id}
        profilePic={post.data.profilePic}
        message={post.data.message}
       timestamp={post.data.timestamp}
        username={post.data.username}
        image = {post.data.image}
        />
       ) )}
      {/* <Post
      profilePic="https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg"
      message="WOW this works"
      timestamp= "this is timestamp"
      username="dummyusername"
      image="https://st2.depositphotos.com/4497765/7520/v/600/depositphotos_75206597-stock-illustration-no-user-profile-picture.jpg"
      
      
      />
      <Post
      profilePic="https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg"
      message="WOW this works"
      timestamp= "this is timestamp"
      username="dummyusername"
    //   image="https://st2.depositphotos.com/4497765/7520/v/600/depositphotos_75206597-stock-illustration-no-user-profile-picture.jpg"
      
      
      /> */}


  </div>;
}

export default Feed;
