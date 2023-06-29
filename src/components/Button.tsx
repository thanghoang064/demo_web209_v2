import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { decreaseCountAction, increaseCountAction } from "../store/counter/action";
import { IRootState } from "../store";



const Button = () =>  {
    const dispatch: Dispatch<any> = useDispatch();
    
    const counterState = useSelector(
        (state: IRootState) => state.counter,
        shallowEqual
    )

    const increase = () => {
        dispatch(increaseCountAction(1));
    }
    const decrease = () => {
        dispatch(decreaseCountAction(1));
    }
    return (
        <>
       
        <h2> Giá trị tăng là  { counterState.counter }</h2>
        <button onClick={increase}>Tăng</button>
        <button onClick={decrease}>Giảm</button>
        </>
    );
}

export default Button;