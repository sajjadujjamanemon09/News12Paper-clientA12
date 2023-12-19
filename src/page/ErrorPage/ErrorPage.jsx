import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <>

       <div className="flex justify-center p-20">
        <Link to='/'>
       <button className="btn border-black">Go to Home</button>
       </Link>
       </div>
       
        <div className="flex justify-center items-center">
            <img className="w-[70vh]" src="https://iili.io/JAfVubs.jpg" alt="" />

        </div>
        
        </>
    );
};

export default ErrorPage;