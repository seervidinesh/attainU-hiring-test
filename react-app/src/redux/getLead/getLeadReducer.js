import { GET_LEAD, LEAD_LOADED } from "./getLeadAction";
import { fetchLeadsFromApi } from "../../api/leadApi";

const getLeadReducer = (leads = {}, action) => {
  switch (action.type) {
    case GET_LEAD:
      fetchLeadsFromApi();
    case LEAD_LOADED:
      return {
        ...leads,
        data: action.lead
      };
    default:
      return leads;
  }
};

export default getLeadReducer;
