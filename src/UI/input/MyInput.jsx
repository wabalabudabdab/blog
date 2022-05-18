import React from 'react';
import classes from './MyInput.module.css';
import styled from "styled-components";

const MyInpyt = styled.input `
    width:100%;
    padding: 5px 15px;
    margin: 5px 0px;
    border: 1px solid teal;
  
`
const MyInpytContainer = styled.section `
    display: grid;
    grid-template-columns: 2fr 2fr;
`;

const MyInput = React.forwardRef((props, ref) => {
    return (
        <MyInpytContainer>
            <MyInpyt ref={ref} className={classes.myInpyt} {...props}/>
        </MyInpytContainer>
    );
});

export default MyInput;