import { createSlice } from "@reduxjs/toolkit";
// initialState global State
export const CounterSlice = createSlice({
  name: "counter_form",
  initialState: {
    count: 0,
  },
  reducers: {
    handleIncrement: (globalState, action) => {
      debugger
      globalState.count += action.payload;
    },

    handleDecrement: (globalState, action) => {
      debugger;
      globalState.count -= action.payload;
    },

    
     reset: (globalState, action) => {
      globalState.count = 0
    },
  },
});

export const { handleIncrement, handleDecrement, reset } = CounterSlice.actions;

export default CounterSlice.reducer;


// Redux 

//    Slices 

//          CounterSlice

// Store.js


// App

// Provider

// wrong approach 



// SSE LIKE Shiva template redux-toolkit

// resuabke complnnets ----- shiva

// utilities -- shiva 

// Cmplete project setup ---  shivs SSE
