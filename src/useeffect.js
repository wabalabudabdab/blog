import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
    const[type, setType] =useState('users');
    const[data, setData] =useState('users');
    const[data, setData] =useState('users');



    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json =>setData(json))
    },[type])
//если type меняесть вызывается usуeffect
    useEffect(()=>{
        console.log('ComponentDidMount');

    },[])
    return (
        <div className="App">
            <h1>Resourse: {type}</h1>
            <button onClick={()=>setType('users')}> Users </button>
            <button onClick={()=>setType('todo')}> todo </button>
            <button onClick={()=>setType('posts')}> posts </button>
            <pre>{JSON.stringify(data, null,2)}</pre>
        </div>
    );
}



export default App;
