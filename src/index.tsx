import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";
import { store } from "./redux/store";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <Auth0Provider
      domain="dev-b7pn7cx42gq4vbym.us.auth0.com"
      clientId="PiQvCX7EdyT8VLJvgopCgGNFOshAprQm"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </Provider>,
  document.getElementById("root")
);
