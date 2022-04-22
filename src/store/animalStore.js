import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

// 1. INITIAL STATE
const initialState = {
  value: 0,
};

// 2. ACTIONS inside the REDUCER
export const animalReducer = createSlice({
  name: "counter", // A name, used in action types
  initialState, // The initial state for the reducer
  reducers: {
    add: (state) => {
      return { value: state.value + 1 };
    },
    subtract: (state) => {
      return { value: state.value - 1 };
    },
    addByAmount: (state, action) => {
      return { value: state.value + action.payload };
    },
  },
});

// 3a. EXPORT THE ACTIONS (this is sent to components)
export const { add: add, subtract: subtract, addByAmount: addByAmount } = animalReducer.actions;

// 3b. CREATE THE STORE (this is sent to index.js)
export const store = configureStore({
  reducer: {
    counter: animalReducer.reducer,
  },
});
