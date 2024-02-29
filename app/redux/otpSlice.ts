import { createSlice,PayloadAction  } from "@reduxjs/toolkit";


 
  interface CartState {
   sessionOtp: boolean;
  }

  const initialState: CartState = {
   sessionOtp: false,
  };

const otpSlice = createSlice({
    name:"otp",
    initialState,
    
    reducers: {
      addSession: (state, action: PayloadAction) => {
                state.sessionOtp = true;
         
      },
      clearSession : state => {
        state.sessionOtp = false; 
      }
    },
  });
  
  export const { addSession, clearSession } = otpSlice.actions;
  export default otpSlice.reducer;