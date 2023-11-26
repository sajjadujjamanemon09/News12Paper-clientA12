import AreaChart from "../Chart/AreaChart/AreaChart";
import BarChart from "../Chart/BarChart/BarChart";
import PieChart from "../Chart/PieChart/PieChart";


const Admin = () => {
    return (
        <div>
            <PieChart></PieChart>
            <div className="flex">
                <div className="w-1/2"><BarChart></BarChart></div>
                <div className="w-1/2"><AreaChart></AreaChart></div>
            </div>
        </div>
    );
};

export default Admin;