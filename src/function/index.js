// function locationCurrent() {
//   return {
//     type: "UPDATE_LOCATION",
//     payload: "Bangladesh",
//   };
// }

// export { locationCurrent };

import { createAction } from "@reduxjs/toolkit";

const locationCurrent = createAction("UPDATE_LOCATION");
const locationAge = createAction("UPDATE_AGE");

export { locationCurrent, locationAge };
