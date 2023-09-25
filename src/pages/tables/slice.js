/* eslint-disable camelcase */
import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

import { STATE_REDUCER_KEY } from "./constants";
import { ACTION_TYPES } from "./actions";


const initialState = {
    basicTable: {
        requestInProgress: false,
        data: []
    },
    pendingVesselRequest: {
        requestInProgress: false,
        data: []
    },
    createVesselModal: false,
    viewVesselDetailsModal: false,
    viewRequestDetails: {},
    createVessel: {
        requestInProgress: false,
        data: {
            vessel_name: "",
            email: "",
            password: "",
            confirmPassword: "",
            fullName: "",
            manufacturer: "",
            type_of_engine: "",
            vessel_type: "",
            cylinder_numbers: "",
            imo_number: ""
        }
    },
    vesselDetails: {
        requestInProgress: false,
        data: {
            vessel_name: "",
            imo_number: "",
            manufacturer: "",
            type_of_engine: "",
            vessel_type: "",
            cylinder_numbers: "",
            _id: "",
            email: "",
            phone: ""
        },
        report: {
            reportCount: 0, cylinderImageCount: 0
        }
    },
    profile: {
        requestInProgress: false,
        data: {
            fullName: "", email: "", phone: "", company_name: ""
        }
    },
    priceList: {
        requestInProgress: false,
        data:
        {
            basic: {},
            pro: {}
        }

    },
    banner: {
        interval: "monthly",
        monthly: true,
        yearly: false
    },
    checkOut: {
        requestInProgress: false
    }

};

const slice = createSlice({
    initialState,
    name: STATE_REDUCER_KEY,
    reducers: {
        clearAll: () => initialState

    },
    extraReducers: (builder) => {
        builder
            .addCase(ACTION_TYPES.PRICE_LIST_REQUEST, (state) => {
                _.set(state, "basicTable.requestInProgress", true);
            })
            .addCase(ACTION_TYPES.PRICE_LIST_SUCCESS, (state, { payload }) => {
                _.set(state, "basicTable.requestInProgress", false);
                _.set(state, "basicTable.data", payload);
            })
            .addCase(ACTION_TYPES.PRICE_LIST_FAILURE, (state) => {
                _.set(state, "profile.requestInProgress", false);
            });
    }
});
export const { actions, reducer } = slice;

