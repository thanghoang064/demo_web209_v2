import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../store";
import { useEffect, useState } from "react";
import { getTotalAmounSelector } from "../../../store/order/selector";
import { Dispatch } from "redux";
import { saveOrderAction } from "../../../store/order/action";

interface ICart {
    productName: string
    quantity: number,
    price: number
}
const Cart = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const orderState = useSelector((state: IRootState) => state.orders);
    const productState = useSelector((state: IRootState) => state.sinhvien);

    const [showDetails, setShowDetails] = useState<boolean>(false)
    const [carts, setCarts] = useState<ICart[]>([])

    useEffect(() => {
        if (!showDetails) {
            // console.log(1221);
            setCarts([])
        } else {
            // console.log(1234);
            handleLoadCartInfo()
        }
    }, [showDetails])

    useEffect(() => {
        
        handleLoadCartInfo()
    }, [orderState])

    const handleLoadCartInfo = () => {
        const cartTemp: ICart[] = []
        console.log(orderState.orders);
        for (const order of orderState.orders) {
            const product = productState.sinhviens.find(product => product.id === order.productId);
            if (product) {
                cartTemp.push({
                    productName: product.ten,
                    quantity: order.quantity,
                    price: order.price
                })
            }
        }
        
        setCarts(cartTemp);
    }

    const handleShowDetailsOrders = () => {
        setShowDetails((state) => !state)
    }
    const handleOrders = () => {
        dispatch(saveOrderAction(orderState.orders));
    }
    return (
        <>
            <h2>Header</h2>
            <p>Your orders: {orderState.orders.length}</p>
            <h4>Total quantity: {getTotalAmounSelector(orderState)}</h4>
            <span onClick={handleShowDetailsOrders} style={{ cursor: "pointer" }}>Show details</span>
            <button onClick={handleOrders}>Order</button>
            {
                showDetails && <div>
                    <hr />

                    <table>
                        <tr>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Total amount</th>
                        </tr>
                        {
                            carts.map((cart, index) => {
                                return (<tr key={index}>
                                    <td>{cart.productName}</td>
                                    <td>{cart.quantity}</td>
                                    <td>{cart.quantity * cart.price}</td>
                                </tr>)
                            })
                        }

                    </table>
                    <hr />
                </div>
            }
        </>
    )

}
export default Cart;