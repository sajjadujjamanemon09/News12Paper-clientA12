import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignIn from "../page/SignIn/SignIn";
import SignUp from "../page/SignUp/SignUp";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Home from "../page/Home/Home/Home";
import AddArticle from "../page/AddArticle/AddArticle";
import PrivateRoutes from "./PrivateRoutes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'addArticles',
        element: <PrivateRoutes><AddArticle /></PrivateRoutes>,
        loader: () =>  fetch("http://localhost:5000/title")
      },
      {
        path: 'signIn',
        element: <SignIn />
      },
      {
        path: 'signUp',
        element: <SignUp />,
      },
    ]
  },
  {
    path: '/errorPage',
    element: <ErrorPage />
  }
]);



export default routes;
