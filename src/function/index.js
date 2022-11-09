// function locationCurrent() {
//   return {
//     type: "UPDATE_LOCATION",
//     payload: "Bangladesh",
//   };
// }

// export { locationCurrent };

import { createAction } from "@reduxjs/toolkit";

//by default return
// {type:"UPDATE_LOCATION", payload: value passed from component}
// {type:"UPDATE_AGE", payload: value passed from component}

const locationCurrent = createAction("UPDATE_LOCATION");
const locationAge = createAction("UPDATE_AGE");
const fetchName = () => {
  return async (dispatch) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    debugger;
    const result = await res.json();
    dispatch({ type: "UPDATE_NAME", payload: result[0].name });
  };
};

export { locationCurrent, locationAge, fetchName };
