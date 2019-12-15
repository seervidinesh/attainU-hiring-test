import { LEAD_COUNT, CONVERTED_LEAD_COUNT } from "./leadCountAction";

const initialState = {
  totalLeads: 0,
  convertedLeads: 0
};

const getLeadCountReducer = (leadcount = initialState, action) => {
  switch (action.type) {
    case LEAD_COUNT:
      return {
        ...leadcount,
        totalLeads: leadcount.totalLeads + 1
      };
    case CONVERTED_LEAD_COUNT:
      return {
        ...leadcount,
        convertedLeads: leadcount.convertedLeads + 1
      };
    default:
      return leadcount;
  }
};

export default getLeadCountReducer;
