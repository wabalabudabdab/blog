import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";
import PostItem from "./PostItem";
import ReactDOM from "react-dom/client";



function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "one", body:"oneeeee"},
        {id: 2, title: "two", body:"twoooo"},
        {id: 3, title: "three", body:"threeeee"},
    ]);


    return (
        <div className="App">
            {posts.map((post) => {
                {
                    <PostItem post={post}/>
                }
            })}
        </div>
    );
}

export default App;
