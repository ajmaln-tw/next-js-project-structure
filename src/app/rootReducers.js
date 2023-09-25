
import _ from "lodash";

import * as tableReducer from "../pages/tables/exports";

const reducers = {};

//Include all the reducer to combine and provide to configure store.

// _.values(pages).forEach(item => {
//   console.log("ajmal", item.exports);
//   const page = item.exports;
//   if (_.has(page, "STATE_REDUCER_KEY") && _.has(page, "reducer")) {
//     _.set(reducers, `${page.STATE_REDUCER_KEY}`, page.reducer);
//   }
// });

_.set(reducers, tableReducer.STATE_REDUCER_KEY, tableReducer.reducer);
const rootReducer = {
  ...reducers
};

export default rootReducer;
