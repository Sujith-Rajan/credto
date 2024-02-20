import { createSlice,PayloadAction  } from "@reduxjs/toolkit";

interface Product {
  
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
  interface CartProduct extends Product {
    quantity: number;
  }
 
  interface CartState {
    products: CartProduct[];
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
    
    reducers: {
      addProduct: (state, action: PayloadAction<Product>) => {
                state.quantity += 1;
                state.products.push(action.payload);
                state.total += action.payload.offer * action.payload.quantity;
      },
      updateProductQuantity: (state, action: PayloadAction<{ productId: string; quantity: number }>) => {
        const { productId, quantity } = action.payload;
        const productToUpdate = state.products.find(product => product.id === productId);
        if (productToUpdate) {
          const prevQuantity = productToUpdate.quantity;
          productToUpdate.quantity = quantity;
          state.quantity += quantity - prevQuantity; 
          state.total += (quantity - prevQuantity) * productToUpdate.offer; 
        }},
        removeProduct: (state, action: PayloadAction<string>) => {
          const productIdToRemove = action.payload;
          const indexToRemove = state.products.findIndex(product => product.id === productIdToRemove);
    
          if (indexToRemove !== -1) {
            const productToRemove = state.products[indexToRemove];
            state.quantity -= productToRemove.quantity; 
            state.total -= productToRemove.offer * productToRemove.quantity; 
            state.products.splice(indexToRemove, 1);
          }
        },
      cartClear : state => {
        state.products = []; 
        state.quantity = 0; 
        state.total = 0; 
      }
    },
  });
  
  export const { addProduct,cartClear,updateProductQuantity,removeProduct } = cartSlice.actions;
  export default cartSlice.reducer;