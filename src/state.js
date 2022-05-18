import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [counter, setCounter] = useState(()=>{return computeInitCounter()});
    const [state, setState] = useState({
        title:'счетчик',
        date: Date.now()
    })


    function computeInitCounter() {
        console.log('somecalc');
        return Math.trunc(Math.random()* 20);

    }

    function increment(){
        setCounter(prevCounter => prevCounter + 1
        )
    }

    function decrement(){
        setCounter(counter - 1)
    }

    function updateTitle(){
        setState((prev =>{
            return{
                ...prev,
                title:'new name'
            }
        }))
    }

    return (
        <div className="App">
            <h1>Счетчик: {counter}</h1>
            <button onClick ={increment}>Добавить</button>
            <button onClick ={decrement}>Убрать</button>
            <button onClick ={updateTitle}>change name</button>
            <pre>{JSON.stringify(state, null,2)}</pre>
        </div>
    );
}

export default App;
