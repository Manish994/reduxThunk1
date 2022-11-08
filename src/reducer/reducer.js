import { createReducer } from "@reduxjs/toolkit";
const initialState = {
  Name: "Manish",
  Age: 27,
  IsMale: true,
};

export default createReducer(initialState, (builder) => {
  builder.addCase("UPDATE_NAME", (state, action) => {
    state.Name = action.payload;
  });
});
