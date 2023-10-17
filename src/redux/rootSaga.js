import { all, fork } from "redux-saga/effects";

import * as tableSaga from "../views/tables/exports";

let sagas = [];

// Here you can include all the saga which you write for components
// _.values(pages).forEach(item => {
//   const page = item.exports;
//   if (_.has(page, "STATE_REDUCER_KEY") && _.has(page, "saga")) {
//     sagas.push(fork(page.saga));
//   }
// });

sagas.push(fork(tableSaga.saga));
export default function* rootSaga() {
  yield all([...sagas]);
}
