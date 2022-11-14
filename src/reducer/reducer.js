import { createReducer, createSlice } from "@reduxjs/toolkit";
import { locationCurrent, locationAge } from "../function";

const initialState = {
  Name: "Abinash",
  Age: 26,
  location: "Dubai",
};

//create slice does not required { type: "UPDATE_AGE", payload: 19 } to be written.
// it creates by itself
const userReducer = createSlice({
  name: "person", // => person/update_Name or person/update_Age  or person/update_location
  initialState,
  reducers: {
    update_Name(state, action) {
      state.Name = action.payload;
    },
    update_Age(state, action) {
      state.Age = action.payload;
    },
    update_location(state, action) {
      state.location = action.payload;
    },
  },
});
//Action creators for the types of actions (update_name, update_age,...) that are handled by the slice reducer.
export const { update_Name, update_Age, update_location } = userReducer.actions;
export default userReducer.reducer;

// export default createReducer(initialState, (builder) => {
//   builder.addCase("UPDATE_NAME", (state, action) => {
//     state.Name = action.payload;
//   });

//   //location.type or location   => same
//   builder.addCase(locationAge.type, (state, action) => {
//     state.Age = action.payload;
//   });
//   //locationCurrent or locationCurrent.type   => same
//   builder.addCase(locationCurrent, (state, action) => {
//     state.location = action.payload;
//   });
// });
