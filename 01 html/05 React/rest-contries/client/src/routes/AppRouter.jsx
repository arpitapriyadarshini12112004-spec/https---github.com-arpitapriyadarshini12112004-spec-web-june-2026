import { createBrowserRouter } from "react-router";
import NotFound from "../components/ErrorPage";
import App from "../App";
import CountryDetail from "../components/CountryDetail";
import Home from "../components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<NotFound/>,
    children: [
      {path:"/",element:<Home/>},
      {path:":country",element: <CountryDetail/>}
    ]
  },
  {
    path: "/about",
    element: <div>About Works</div>,
  }
  // {
  //   path: "/:country",
  //   element: <CountryDetail/>
  // },
]);

export default router