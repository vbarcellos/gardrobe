import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { App } from "./App.jsx";
import "./styles.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
