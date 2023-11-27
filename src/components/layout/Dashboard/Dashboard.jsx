
import { Helmet } from "react-helmet-async";
import DashboardComponent from "./DashboardComponent";


const Dashboard = () => {
  return (
    <>
    <Helmet>
      <title>News12Paper | DashBoard</title>
    </Helmet>
    
      <DashboardComponent></DashboardComponent>
     
    </>
  );
};

export default Dashboard;