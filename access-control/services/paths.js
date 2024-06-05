import envVars from "../envVars.js";

export default {
  CREDITS_MANAGEMENT: {
    PAYMENT: envVars.CREDIT_MANAGEMENT_URL + "/payment/:id",
  },
  PARKING_AVAILABILITY: {
    IN: envVars.PARKING_CONTROL_URL + "/in/:id",
    OUT: envVars.PARKING_CONTROL_URL + "/out/:id",
  },
  USERS: {
    GET_CATEGORY: envVars.USERS_URL + "/:id/category"
  },
  GATE_CONTROL: {
    IN: envVars.GATE_CONTROL_URL + "/in/:id",
    OUT: envVars.GATE_CONTROL_URL + "/out/:id",
  }
}
