import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner';
import UseGif from '../hooks/UseGif';

  const API_KEY= import.meta.env.VITE_API_KEY;


  const Tag = () => {
//   const [gif, setgif] = useState("");
//   const [loading, setloading] = useState('false');
  const [tag, settag] = useState("");

//   async function getdata(){
//     setloading(true);
//     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
//     const {data} = await axios.get(url);
//     const imgsourse = data.data.images.downsized_large.url;
//     setgif(imgsourse);
//     setloading(false);
// } 

//     useEffect(()=>{
//       getdata();
//     }, [])
    const {gif,loading , getdata} = UseGif(tag);

    function clickhandler(){
      getdata(tag);
    }

    function changehandler(event){
      settag(event.target.value);
    }

  return (
    <div className='bg-blue-400 w-1/2  border-[2px] border-black rounded-lg flex
    flex-col items-center gap-y-5 pt-2'>
      <h2 className='text-xl underline font-bold '>Random Gif</h2>

      {
        loading ? (<Spinner/>):(<img src={gif} width={450} />)
      }

      <input type="text"
      className='w-10/12 rounded-md text-center py-2 mb-1'
      onChange={changehandler}
      value={tag}
      />
      
      <button onClick={clickhandler}
      className='bg-white w-10/12 p-2 rounded-lg mb-5'>
        Generate 
      </button>
    </div>
  )
}

export default Tag