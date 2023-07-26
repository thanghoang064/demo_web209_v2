import { AddCartAction } from "./action";

export interface IOrder {
    productId: number;
    quantity: number;
  }

  export interface IOrderState {
    orders: IOrder[];
  }
  
  const initialState: IOrderState = {
    orders: [],
  };
  
  

const orderReducer = (state :IOrderState =initialState, action:AddCartAction):IOrderState =>{
    switch(action.type) {
        case 'add-cart': 
      
        const orderExistingIndex = state.orders.findIndex(order => order.productId === action.payload.id)
      
        if (orderExistingIndex === -1) {
            state.orders.unshift({
                productId: action.payload.id,
                quantity: 1
              });

           state = {
                ...state,
                orders: state.orders
              
           }   
          
        } else {
         
          state.orders[orderExistingIndex].quantity += 1;
          state = {
            ...state,
            orders: state.orders
          }   
        }
            
        break;
       
    }
    return state
}

export default orderReducer;