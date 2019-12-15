const LEAD_COUNT = "LEAD_COUNT";
const GET_LEAD_COUNT = "GET_LEAD_COUNT";
const CONVERTED_LEAD_COUNT = "CONVERTED_LEAD_COUNT";
const getLeadCount = () => {
  return {
    type: LEAD_COUNT
  };
};

const getConvertedLeadCount = () => {
  return {
    type: CONVERTED_LEAD_COUNT
  };
};

export {
  LEAD_COUNT,
  getLeadCount,
  GET_LEAD_COUNT,
  CONVERTED_LEAD_COUNT,
  getConvertedLeadCount
};
