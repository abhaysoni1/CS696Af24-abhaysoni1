import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function Intro (){
    const [counter,setCounter] = useState(30);
    function increment(){
        setCounter(counter+1);
    }
    useEffect(()=>{
        fetch("https://localhost:9000")
        .then(response => console.log(response))
        .catch(error=> console.error(error));

    },[])
    function decrement(){
        setCounter(counter-1);
    }
    

    return(
       <div>Just Another Page : current:{counter}
       <Button onClick={increment}>Increment</Button>
       <Button variant="warning" onClick={decrement}>Decrement</Button>
       </div>
    );
}
export default Intro;