import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';


const API_KEY= import.meta.env.VITE_API_KEY;



const UseGif = (tag) => {


    const [gif, setgif] = useState("");
    const [loading, setloading] = useState('false');
    const randurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const tagurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    
    async function getdata(tag){
      setloading(true);
      const {data} = await axios.get(tag ? tagurl : randurl);
      const imgsourse = data.data.images.downsized_large.url;
      setgif(imgsourse);
      setloading(false);
        } 
  
      useEffect(()=>{
        getdata();
      }, [])
  
      return {gif, loading, getdata};

    }
     


export default UseGif