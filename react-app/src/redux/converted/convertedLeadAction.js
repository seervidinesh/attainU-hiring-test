const CONVERT_LEAD = "CONVERT_LEAD";
const convertLead = leadData => {
  return {
    type: CONVERT_LEAD,
    payload: leadData
  };
};

export { CONVERT_LEAD, convertLead };
