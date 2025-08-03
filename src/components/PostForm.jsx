import React, { useState } from 'react'
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

function PostForm({create}) {
    const [post,setPost] = useState({title:'',body:''});

    const addNewPost = (e)=>{
        e.preventDefault();
        const newPost = {
            ...post , id: Date.now()
        }
        create(newPost);
        setPost({title:'',body:''});
    }

  return (
    <form>
        {/* управляемый компонент */}
        <MyInput
         value={post.title}
         onChange={e=>setPost({...post , title:e.target.value})}
         type="text"  
         placeholder='post name'
         />
        <MyInput
         value={post.body}
         onChange={e=>setPost({...post , body:e.target.value})}
         type="text"
         placeholder='post input'
         />
        <MyButton onClick={addNewPost}>create post</MyButton>
      </form>
  )
}

export default PostForm