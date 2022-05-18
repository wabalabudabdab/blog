import React from 'react';
import MyButton from "../UI/button/MyButton";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: left;
  color: palevioletred;
`;

const Body = styled.h2`
  font-size: 1em;
  text-align: left;
  color: #d52a62;
`;

const PostItem = (props) => {


    return (
        <div>
            <div>
                <Title>{props.number}.{props.post.title}</Title>
                <Body>
                    {props.post.body}
                </Body>
            </div>
            <div>
                <MyButton onClick={()=>props.remove(props.post)}>Delete</MyButton>
            </div>
        </div>
    );
};

export default PostItem;