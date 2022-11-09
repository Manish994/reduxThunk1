import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  Name: "Abinash",
  Age: 26,
  location: "Dubai",
};

export default createReducer(initialState, (builder) => {
  builder.addCase("UPDATE_NAME", (state, action) => {
    state.Name = action.payload;
  });
  builder.addCase("UPDATE_AGE", (state, action) => {
    state.Age = action.payload;
  });
  builder.addCase("UPDATE_LOCATION", (state, action) => {
    state.location = action.payload;
  });
});
