import { shallowEqual, useSelector } from "react-redux"
import { IRootState } from "../store"

const Button1 = () => {
    const counterState = useSelector(
        (state: IRootState) => state.counter,
        shallowEqual
    )
    return (<>
    số là {counterState.counter}
    </>)
}

export default Button1;