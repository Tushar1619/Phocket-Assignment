import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div>
      <h1 className='text-2xl mt-2 text-center font-bold mb-4'>Posts</h1>

      <div className="wrapper">
  <div className="cols">
  {posts.map((post: any) => (
    <div  key={post.id} className="col" ontouchstart="this.classList.toggle('hover');">
    <div className="container">
      <div className="front bg-[url('https://media.istockphoto.com/id/1365590841/vector/vector-illustration-of-a-rustic-dark-brown-coloured-wooden-or-timber-textured-effect-empty.jpg?s=612x612&w=0&k=20&c=PW6ZBA7Woa2Q4cv0QLLJxg-imIte3oWYR9xEGIIIAdY=')]" >
        <div className="inner">
          <p>{
          post.title.split(" ")[0]+" "+post.title.split(" ")[1]
          }</p>
          <span>Message is here</span>
        </div>
      </div>
      <div className="back">
        <div className="inner">
          <p>{
          post.body.substring(0,60)
          }</p>
        </div>
      </div>
    </div>
  </div>
          // <li>
          //   <h2 className='font-bold'></h2>
          //   <p></p>
          // </li>
        ))}
			
	
		</div>
 </div>


      <ul>
      
      </ul>
    </div>
  );
};

export default PostsPage;
