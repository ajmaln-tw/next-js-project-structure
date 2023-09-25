import { REQUEST_METHOD } from "src/@core/constant";
import { ACTION_TYPES } from "./actions";
import { API_URL } from "./urls";

export const getPrices = () => {
    return {
        url: API_URL.TABLES.BASIC,
        method: REQUEST_METHOD.GET,
        payload: {
            types: [ACTION_TYPES.PRICE_LIST_REQUEST, ACTION_TYPES.PRICE_LIST_SUCCESS, ACTION_TYPES.PRICE_LIST_FAILURE]
        }
    };
};
