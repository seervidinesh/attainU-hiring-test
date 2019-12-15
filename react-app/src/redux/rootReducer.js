import { combineReducers } from "redux";
import getLeadReducer from "./getLead/getLeadReducer";
import getLeadCountReducer from "./leadCounts/leadCountReducer";
import convertLeadReducer from "./converted/convertedReducer";
const rootReducer = combineReducers({
  leadData: getLeadReducer,
  leadCount: getLeadCountReducer,
  convertedLead: convertLeadReducer
});

export default rootReducer;
