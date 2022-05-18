import React from 'react';
import PostItem from "./PostItem";
import {TransitionGroup,CSSTransition} from "react-transition-group";

const PostList = ({posts, title, remove}) => {


    if (!posts.length){
        return (
                <div>Посты не найдены</div>
        )
    }
    return (
        <div>
            <h1> {title}</h1>
            <TransitionGroup>
                {
                    posts.map((post, index) =>
                        <CSSTransition
                            key={post.id}
                            timeout={500}
                            classNames="post"
                        >
                            <PostItem remove={remove} number = {index + 1} post={post} key={post.key}/>
                        </CSSTransition>
                    )
                }
            </TransitionGroup>

        </div>
    );
};

export default PostList;