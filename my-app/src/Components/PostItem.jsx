import React from "react";

const PostItem = ({posts}) => {
    
    return (
      <div className='post__content'>
        {posts.map((posts) => {
          return <div className='post' key={posts.id}>
            <strong>{posts.id}. {posts.description}</strong>
            <div style={{color: 'red', textAlign: 'left'}}>
              {posts.body}
            </div>
            <div className='post__btn'>
              <button>Delete</button>
            </div>
          </div>        
        })}
      </div>
 )
}

export default PostItem;
