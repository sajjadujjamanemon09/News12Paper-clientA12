import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignIn from "../page/SignIn/SignIn";
import SignUp from "../page/SignUp/SignUp";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Home from "../page/Home/Home/Home";
import AddArticle from "../page/AddArticle/AddArticle";
import PrivateRoutes from "./PrivateRoutes";
import AllArticles from "../page/AllArticle/AllArticle/AllArticles";
import Dashboard from "../components/layout/Dashboard/Dashboard";
import AddPublisherDashboard from "../components/layout/Dashboard/DashboardSide/AddPublisherDashboard";
import AllArticlesDashboard from "../components/layout/Dashboard/DashboardSide/AllArticlesDashboard";
import AllUsersDashboard from "../components/layout/Dashboard/DashboardSide/AllUsersDashboard";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "addArticles",
        element: (
          <PrivateRoutes>
            <AddArticle />
          </PrivateRoutes>
        ),
      },
      {
        path: "allArticles",
        element: (
          <PrivateRoutes>
            <AllArticles />
          </PrivateRoutes>
        ),
      },
      {
        path: "signIn",
        element: <SignIn />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/errorPage",
    element: <ErrorPage />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      { 
        path: "addPublisherDashboard", 
        element: <AddPublisherDashboard />
      },
      { 
        path: "allArticlesDashboard", 
        element: <AllArticlesDashboard/> 
      },
      { 
        path: "allUsersDashboard", 
        element: <AllUsersDashboard/>
      },
    ],
  },
]);

export default routes;
