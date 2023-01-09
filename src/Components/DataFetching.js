import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { version } from 'react';

console.log(version);
function DataFetching() {
    const [post, setPost] = useState([])
    const [fetch, setFetch] = useState(false)
    const fetchData = async () =>{

      await axios.get('https://dog.ceo/api/breeds/image/random')
      .then((response) =>{
        setPost(response.data)

      }).catch((error)=>{
          console.log(error)
      })
    }
    
    useEffect(() => {
      
      fetchData();
    },[fetch])

      const clickHandler = () =>{
        setFetch((st) => !st)
        console.log('set fetch is ' + fetch)

      }
      
    
  return (
    <div>
      <button onClick={clickHandler}> {fetch?"Hide Data":"Fetch data"}</button>
      
    {fetch === true && 
        
            <div>
            <div>{post.message}</div>
            <img style = {{padding:"20px"}}src = {post.message} key={9} alt ='api'  /></div>
    }
      
    </div>
  )
}

export default DataFetching