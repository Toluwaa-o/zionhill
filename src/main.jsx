import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./i18n";
import("videojs-youtube/dist/Youtube.min.js");
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import "/public/assets/scss/streamit.scss";
import "/public/assets/scss/custom.scss";
import "/public/assets/scss/rtl.scss";
import "animate.css/animate.css";

import "choices.js/public/public/assets/styles/choices.min.css";

//router
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// store
import { store } from "./store/index";
import { Provider } from "react-redux";

// index router
import { IndexRouters } from "./router/index";

const router = createBrowserRouter([...IndexRouters], {
  basename: import.meta.env.VITE_URL,
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App>
        <RouterProvider router={router}></RouterProvider>
      </App>
    </Provider>
  </React.StrictMode>
);
