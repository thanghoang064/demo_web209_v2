import { useSelector } from "react-redux";
import { IRootState1 } from "../store";

const ComponentB = () => {
    const counterState = useSelector(
        (state: IRootState1) => state.counter1,
        
    )
    console.log(counterState.counter);
    return (
        <>
        <h1>Số là {counterState.counter}</h1>
        </>
    )
}
export default ComponentB;