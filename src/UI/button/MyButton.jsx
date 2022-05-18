import React from 'react';
import styled from "styled-components";

const MyBtn = styled.button`
    padding: 5px 15px;
    color: teal;
    font-size: 14px;
    background: transparent;
    border: 1px solid teal;
    cursor: pointer;
    text-align: center;
    width: 150px;
`;

const MyBtnContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center ;
`;

const MyButton = ({children, ...props}) => {
    return (
        <MyBtnContainer>
            <MyBtn {...props}>
                {children}
            </MyBtn>
        </MyBtnContainer>

    );
};

export default MyButton;