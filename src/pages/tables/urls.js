

export const API_URL = {
    TABLES: {
        BASIC: "users",
        PENDING_VESSEL_REQUEST: "auth/organization/pending-vessel-list",
        CREATE_VESSEL: "auth/organization/create-vessel",
        APPROVE_REQUEST: "auth/organization/approve-request/:id"
    },
    VESSELS: {
        LIST: "auth/organization/vessel-list",
        ID: "auth/organization/vessel/:id"
    },
    PROFILE: {
        ID: "auth/common/profile",
        UPDATE: "auth/common/profile"
    },
    SUBS: {
        PRICES: "no-auth/price/:interval"
    }
};
