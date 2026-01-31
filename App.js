import React from "react";
import MatriculaView from "./src/views/MatriculaView";
import { Provider } from "react-redux";
import store from "./src/Store";

export default function App() {
  return (
    <Provider store={store}>
      <MatriculaView />
    </Provider>
  );
}
