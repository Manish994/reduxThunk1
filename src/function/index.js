// function locationCurrent() {
//   return {
//     type: "UPDATE_LOCATION",
//     payload: "Bangladesh",
//   };
// }

// export { locationCurrent };

import { createAction } from "@reduxjs/toolkit";

const locationCurrent = createAction("UPDATE_LOCATION");

export { locationCurrent };
