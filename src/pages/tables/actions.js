import { createAction } from "@reduxjs/toolkit";
import { STATE_REDUCER_KEY } from "./constants";


export const ACTION_TYPES = {
    PRICE_LIST: `${STATE_REDUCER_KEY}/PRICE_LIST`,
    PRICE_LIST_REQUEST: `${STATE_REDUCER_KEY}/PRICE_LIST_REQUEST`,
    PRICE_LIST_SUCCESS: `${STATE_REDUCER_KEY}/PRICE_LIST_SUCCESS`,
    PRICE_LIST_FAILURE: `${STATE_REDUCER_KEY}/PRICE_LIST_FAILURE`
};


export const fetchPrices = createAction(ACTION_TYPES.PRICE_LIST);
