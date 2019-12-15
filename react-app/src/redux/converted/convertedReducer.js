import { CONVERT_LEAD } from "./convertedLeadAction";

const initialState = {
  data: []
};

const convertLeadReducer = (convertedLead = initialState, action) => {
  switch (action.type) {
    case CONVERT_LEAD:
      return {
        ...convertedLead,
        data: [...convertedLead.data, action.payload]
      };
    default:
      return convertedLead;
  }
};

export default convertLeadReducer;
