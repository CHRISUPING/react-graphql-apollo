import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import * as serviceWorker from "./serviceWorker";
import App from "./app/index";

import client from "./actions/client";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
