import React, {useState} from 'react';
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";

const PostForm = ({create}) => {

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost ={
        ...post, id:Date.now()
        }
        create(newPost)

        setPost({title:'', body:''});
    }

    const [post,setPost] = useState({title:'', body:''});

    return (
        <form>
            <MyInput
                value={post.title}
                onChange={e=>setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Name of post"
            />
            <MyInput
                value={post.body}
                onChange={e=>setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Body of post"
            />
            {/*<MyInput*/}
            {/*    ref = {bodyInputRef}*/}
            {/*    type="text"*/}
            {/*    placeholder="Body of post"*/}
            {/*/>*/}
            <MyButton  onClick={addNewPost}>Create post</MyButton>
        </form>
    );
};

export default PostForm;