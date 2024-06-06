import axios from "axios";
import "./style.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
 
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/getposts')
      .then(posts => {
      setPosts(posts.data)
      })
    .catch(err => console.log(err))
  }, [])


  return (
    <div className="posts_conatiner">
      {
        posts.map(post => (
          <Link to={`/post/${post.id}`} className="post">

            <img src={`http://localhost:3001/Images/${post.file}`} alt="" />
            <div className="post_text">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default Home;
