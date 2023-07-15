import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { increaseCountAction, sumTwoNumBerAction } from "../store/counter1/action";
import { useState } from "react";

const ComponentA = () => {
    const dispatch:Dispatch<any> = useDispatch();

    const increase = () => {
        dispatch(increaseCountAction(1));
    }
    const [so1,setSo1] = useState<number>(0);
    const [so2,setSo2] = useState<number>(0);
    const sum = () => {
        
        dispatch(sumTwoNumBerAction(so1,so2))
    }
    return (
        <>
        <input type="text" onChange={(e)=>setSo1(+e.target.value)}/>
        <input type="text"  onChange={(e)=>setSo2(+e.target.value)}/>
        <button  onClick={sum} >Tổng</button>
        <button onClick={increase} >Tăng</button>
        </>
    );
}
export default ComponentA;