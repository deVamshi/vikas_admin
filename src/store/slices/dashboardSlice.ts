import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMatchesDetails } from "../api";

export const getDashboardData = createAsyncThunk(
  "getDashboardData",
  async () => {
    // const res = fetchMatchesDetails();
    return dummyDashboardData;
  }
);

const initialState = {
  data: {
    liveTransactionValue: [],
    vbUsers: [],
    allTransactions: [],
    sellerProduce: [],
    totalTransactionValue: [],
  },
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDashboardData.fulfilled, (state, action) => {
      state.data.liveTransactionValue =
        action.payload["livetransactionoverview"];
      state.data.vbUsers = action.payload["vbusers"];
      state.data.allTransactions = action.payload["AllTransactions"];
      state.data.sellerProduce = action.payload["sellerproduce"];
      state.data.totalTransactionValue =
        action.payload["totaltransactionvalue"];

    });
  },
});

export default dashboardSlice.reducer;

// Need to be removed later
const dummyDashboardData: any = {
  livetransactionoverview: [
    { legend: "Trade Pending", value: 777 },
    { legend: "Trade Confirmed", value: 777 },
    { legend: "Seller Booked", value: 777 },
    { legend: "Transportation to be Assigned", value: 777 },
    { legend: "Transportation Assigned", value: 777 },
    { legend: "Produce to be Picked", value: 777 },
    { legend: "Produce Picked", value: 777 },
    { legend: "Produce in Transit", value: 200 },
    { legend: "Produce Delivered", value: 200 },
  ],
  vbusers: [
    { legend: "Seller Only", value: 200 },
    { legend: "Buyer Only", value: 200 },
    { legend: "Seller+Buyer", value: 200 },
  ],
  AllTransactions: [
    { legend: "On Going", value: 200 },
    { legend: "Pending", value: 200 },
    { legend: "Completed", value: 200 },
  ],
  sellerproduce: [
    { legend: "Yes", value: 200 },
    { legend: "No", value: 200 },
  ],
  totaltransactionvalue: [
    { legend: "Produce Type A", value: 200 },
    { legend: "Produce Type B", value: 200 },
    { legend: "Produce Type C", value: 200 },
    { legend: "Produce Type D", value: 200 },
    { legend: "Other Produces", value: 200 },
  ],
};
