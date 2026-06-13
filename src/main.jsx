import React from "react";
import ReactDOM from "react-dom/client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import App from "./App";
import "./index.css";

AOS.init({
  duration: 1000,
  once: true
});

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>
    

    <BrowserRouter basename="/mass_engineering">

      <App />

    </BrowserRouter>

  </React.StrictMode>

);