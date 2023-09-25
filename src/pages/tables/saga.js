
import { all, call, takeLatest } from "redux-saga/effects";
import { ACTION_TYPES } from "./actions";
import { handleAPIRequest } from "src/utils/http";
import {
    getPrices
} from "./api";

export function* priceListSaga() {
    yield call(handleAPIRequest, getPrices);
}

export default function* moduleSaga() {
    yield all([
        takeLatest(ACTION_TYPES.PRICE_LIST, priceListSaga)
    ]);
}
