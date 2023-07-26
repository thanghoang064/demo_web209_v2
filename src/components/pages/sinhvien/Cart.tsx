import { useSelector } from "react-redux";
import { IRootState } from "../../../store";
import { useEffect, useState } from "react";

interface ICart {
    productName: string
    quantity: number
}
const Cart = () => {
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
                    quantity: order.quantity
                })
            }
        }
        
        setCarts(cartTemp);
    }

    const handleShowDetailsOrders = () => {
        setShowDetails((state) => !state)
    }
    return (
        <>
            <h2>Header</h2>
            <p>Your orders: {orderState.orders.length}</p>
            <span onClick={handleShowDetailsOrders} style={{ cursor: "pointer" }}>Show details</span>
            {
                showDetails && <div>
                    <hr />

                    <table>
                        <tr>
                            <th>Product Name</th>
                            <th>Quantity</th>
                        </tr>
                        {
                            carts.map((cart, index) => {
                                return (<tr key={index}>
                                    <td>{cart.productName}</td>
                                    <td>{cart.quantity}</td>
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