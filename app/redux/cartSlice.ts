import { createSlice,PayloadAction  } from "@reduxjs/toolkit";

interface Product {
    // Define properties for a product
    // For example:
  id :string        
  title      :string
  description:string
  imageSrc   :string
  createdAt  : Date     
  category   :string
  color      :string[]
  inStock    : Boolean     
  price       :  number
  offer       :  number
  }
  
  // Define the type for the cart state
  interface CartState {
    products: Product[];
    quantity: number;
    total: number;
  }

  const initialState: CartState = {
    products: [],
    quantity: 0,
    total: 0,
  };

const cartSlice = createSlice({
    name:"cart",
    initialState,
    
    reducers:{
            addProduct: (state,action) => {
                state.quantity += 1;
                state.products.push(action.payload);
                state.total += action.payload.price * action.payload.quantity;
            }
    }
})

export const {addProduct} = cartSlice.actions;
export default cartSlice.reducer;