import logo from './logo.svg';
import './App.css';
import React, {useEffect, useMemo, useRef, useState} from "react";
import PostList from "./components/PostList";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./UI/select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./UI/modal/MyModal";
import {usePosts} from "./hooks/usePosts";
import axios from "axios";
import PostService from "./API/PostService";
import Loader from "./UI/loader/Loader";
import {useFetching} from "./hooks/useFetching";



function App() {

    const [posts, setPosts] = useState([
    ]);



    // //sorting
    // const [selectedSort, setSelectedSort] = useState('');
    // //searching
    // const [searchQuery, setSearchQuery] = useState('');

    const [filter, setFilter] = useState({sort:'', query:''});
    const [Modal,setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    //обработка индикации загрузки
    const [fetchPosts, isPostsLoading, postError]= useFetching(async()=> {
        const posts = await PostService.getAll();
        setPosts(posts);
    })

    useEffect(()=>{
        fetchPosts();
        },[])



    //функция обратного вызова которую мы щас будем передавать в компонент postForm
    const createPost = (newPost) => {
        setPosts([...posts,newPost])
        setModal(false);
    }

    //реализуем функцию обратного вызова в родительском компоненте так как нельзя будет получить к нему доступ из дочернего - щас мы его прокинем в постItem
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !==post.id))

    }

    //sort мутирует поэтому разворачиваем новый массив и не мутируем напрямую
    //localeCompare - сравнение строк




    return (
        <div className="App">
            <MyButton onClick={()=> setModal(true)}>
                Создать пост
            </MyButton>

            <MyModal visible={Modal} setVisible={setModal}>
            <PostForm create = {createPost}/>

        </MyModal>

            <PostFilter  filter = {filter} setFilter = {setFilter}/>
            {
                postError &&
                    <h1>произошла ошибка ${postError}</h1>
            }
            {        isPostsLoading
                ?<div style={{display:'flex', justifyContent:'center'}}><Loader/></div>
                :            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts about JS"/>

            }


        </div>
    );
}

export default App;
