import { CiMail, CiPhone, CiLocationOn } from "react-icons/ci";

const ContactUs = () => {
    return (
        <div className="max-w-7xl mx-auto p-2 py-10">
            <div className="text-center ">
            <h2 className="text-center text-5xl font-bold text-cyan-500 mt-16 mb-10">Contact With US</h2>
            </div>
            <div className="hero">
  <div className="hero-content flex-col md:flex-row justify-between">
    <div className="text-center w-2/4 lg:text-left">
      <h1 className="text-5xl font-bold">Get Touch</h1>
      <p className="py-6 max-w-2xl">Thank you for your interest in reaching out to us at <span className="text-red-500">Tech Fusion X</span>. We value your feedback, inquiries, and any technology-related concerns you may have. Our team is dedicated to providing exceptional service and support to ensure your tech experience is seamless and satisfying.</p>
      <div className="flex my-auto items-center gap-4">
        <p className="text-2xl text-red-500"><CiMail/> </p><p>tech@fusionX.com</p>
      </div>
      <div className="flex my-auto items-center py-3 gap-4">
        <p className="text-2xl text-red-500"><CiPhone/> </p><p>+213-(340987827)</p>
      </div>
      <div className="flex my-auto items-center gap-4">
        <p className="text-2xl text-red-500"><CiLocationOn/> </p><p>Las Vegas, USA</p>
      </div>
      
    </div>
                
                <div className="md:w-2/4">
                    <img src="https://i.ibb.co/tpR59jq/smiling-woman-headset-presentation-something.jpg" alt="" />
                </div>
            </div>
           
        </div>
        </div>
    );
};

export default ContactUs;