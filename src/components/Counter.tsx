import { useState } from "react";

const Counter = ()  => {
    const [counter,setCounter] = useState(0);
    const handlerCounter = () => {
        setCounter(counter - 1);
    }
    
    return (<>
    <h1>Đây là giá trị set {counter}</h1>
    <input type="button" value={'count'} onClick={handlerCounter}/>
    </>);
}
export default Counter;