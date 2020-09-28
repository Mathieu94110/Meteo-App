import { SET_ALERT, AlertAction, AlertState } from "../../types";

const initialState: AlertState = {
  message: "",
};
export default (state = initialState, action: AlertAction): AlertState => {
  switch (action.type) {
    case SET_ALERT:
      return {
        message: action.payload,
      };
    default:
      return state;
  }
};
