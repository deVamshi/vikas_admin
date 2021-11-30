import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  buyerCount: number;
  sellerCount: number;
}

const initialState: UserState = {
  sellerCount: 0,
  buyerCount: 0,
  
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setVBUsers: (state, action: PayloadAction<number>) => {
      state = { ...state, sellerCount: action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setVBUsers } = counterSlice.actions;

export default counterSlice.reducer;
