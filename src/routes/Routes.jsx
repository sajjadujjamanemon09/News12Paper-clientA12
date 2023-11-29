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
import Admin from "../components/layout/Dashboard/Admin/Admin";
import Profile from "../page/Profile/Profile";
import MyArticle from "../page/MyArticle/MyArticle";
import EditMyArticle from "../page/MyArticle/EditMyArticle";
import ViewArticleDetails from "../page/AllArticle/AllArticle/ViewArticleDetails";
import PremiumArticle from "../page/PremiumArticle/PremiumArticle";
import Subscription from "../page/Subscription/Subscription";
import Pay from "../page/Subscription/Payment/Pay";

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
        path: "myArticle",
        element: <MyArticle />,
      },
      {
        path: "pay/:id",
        element: <Pay />,
      },
      {
        path: "subscription",
        element: <Subscription />,
      },
      {
        path: "premiumArticle",
        element: <PremiumArticle />,
      },
      {
        path: "viewArticleDetails/:id",
        element: <ViewArticleDetails />,
        loader: ({ params }) =>
          fetch(`https://assignment-12-server-ivory-pi.vercel.app/title/viewDetails/${params.id}`),
      },
      {
        path: "editMyArticle/:id",
        element: <EditMyArticle />,
        loader: ({ params }) =>
          fetch(`https://assignment-12-server-ivory-pi.vercel.app/title/update/${params.id}`),
      },
      {
        path: "signIn",
        element: <SignIn />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
      {
        path: "profile",
        element: <Profile />,
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
        path: "admin", 
        element: <Admin />
      },
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
