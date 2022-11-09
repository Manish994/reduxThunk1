import { createReducer } from "@reduxjs/toolkit";
import { locationCurrent, locationAge } from "../function";

const initialState = {
  Name: "Abinash",
  Age: 26,
  location: "Dubai",
};

export default createReducer(initialState, (builder) => {
  builder.addCase("UPDATE_NAME", (state, action) => {
    state.Name = action.payload;
  });

  //location.type or location   => same
  builder.addCase(locationAge.type, (state, action) => {
    state.Age = action.payload;
  });
  //locationCurrent or locationCurrent.type   => same
  builder.addCase(locationCurrent, (state, action) => {
    state.location = action.payload;
  });
});
