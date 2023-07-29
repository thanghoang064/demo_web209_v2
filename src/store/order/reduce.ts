import { AddCartAction, IClearOrderStore } from "./action";

export interface IOrder {
  productId: number;
  quantity: number;
  price: number;
}

export interface IOrderState {
  orders: IOrder[];
}

const initialState: IOrderState = {
  orders: [],
};


type OrderActions = AddCartAction | IClearOrderStore


const orderReducer = (state: IOrderState = initialState, action: OrderActions): IOrderState => {
  switch (action.type) {
    case 'add-cart':

      const orderExistingIndex = state.orders.findIndex(order => order.productId === action.payload.id)

      if (orderExistingIndex === -1) {

        state = {
          ...state,
          orders: [{
            productId: action.payload.id,
            quantity: 1,
            price: action.payload.namsinh
          }, ...state.orders]

        }

      } else {
        state.orders[orderExistingIndex].quantity += 1;
        state = {
          ...state,
          orders: state.orders
        }
      }

      break;

    case 'clear-order-order':
      // state.orders = []
      state = {
        ...state,
        orders: []
      }
      break;
    default:
      break;
  }
  return state
}

export default orderReducer;