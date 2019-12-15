import React from "react";
import GetLead from "./components/getLead";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./App.css";
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <h2 className="mt-5">AttainU Lead Management Application</h2>
          <GetLead />
        </div>
      </Provider>
    );
  }
}

export default App;
