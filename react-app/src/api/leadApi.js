import { LEAD_LOADED } from "../redux/getLead/getLeadAction";
import { store } from "../redux/store";

const fetchLeadsFromApi = () => {
  var url = "https://randomuser.me/api";
  fetch(url)
    .then(data => data.json())
    .then(response => {
      store.dispatch({
        type: LEAD_LOADED,
        lead: response.results[0]
      });
    });
};

export { fetchLeadsFromApi };
