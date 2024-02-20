import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {

    id: string
    title: string
    description: string
    imageSrc: string
    createdAt: Date
    category: string
    color: string[]
    inStock: Boolean
    price: number
    offer: number
}
interface WishlistProduct extends Product {
    quantity: number;
}

interface WishlistState {
    products: WishlistProduct[];
    quantity: number;
    total: number;
}

const initialState: WishlistState = {
    products: [],
    quantity: 0,
    total: 0,
};

const wishListSlice = createSlice({
    name: "wish",
    initialState,

    reducers: {
        wishProduct: (state, action: PayloadAction<Product>) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.offer * action.payload.quantity;
        },

        wishRemoveProduct: (state, action: PayloadAction<string>) => {
            const productIdToRemove = action.payload;
            const indexToRemove = state.products.findIndex(product => product.id === productIdToRemove);

            if (indexToRemove !== -1) {
                const productToRemove = state.products[indexToRemove];
                state.quantity -= productToRemove.quantity;
                state.total -= productToRemove.offer * productToRemove.quantity;
                state.products.splice(indexToRemove, 1);
            }
        },

    },
});

export const { wishProduct, wishRemoveProduct } = wishListSlice.actions;
export default wishListSlice.reducer;