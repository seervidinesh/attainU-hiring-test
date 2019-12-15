import { createStore } from "redux";
import rootReducer from "./rootReducer";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function stateMapper(state) {
  return state;
}

export { store, stateMapper };
