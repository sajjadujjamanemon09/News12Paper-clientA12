import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import SectionTitle from "../../../components/section/SectionTitle";
import toast from 'react-hot-toast';

const ContactUs = () => {

  const notify = () =>
  toast.success("Message Sent Successfully", {
    position: "top-right",
    autoClose: 10000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ikytkto', 'template_ya3k5pf', form.current, 'TIZePvEXKy_M-DED9')
      .then((result) => {
        console.log(result.text);
        form.current.reset();
        // Show the success toast
        notify();
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <div className="max-w-7xl mx-auto p-2 py-10">
                    <SectionTitle
          subHeading={"CONTACT"}
          heading={"Get In Touch"}
        ></SectionTitle>
            <div className="hero">
  <div className="hero-content flex-col md:flex-row justify-between">


<form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto mt-16 flex w-full flex-col border rounded-lg bg-white p-8">
  <h2 className="title-font mb-1 text-xl font-semibold text-gray-900">
    Feedback
  </h2>
  <p className="mb-5 leading-relaxed text-gray-600">
    If you had any issues please share with us!
  </p>
  <div className="mb-4">
    <label htmlFor="email" className="text-sm leading-7 text-gray-600">
      Email
    </label>
    <input
      type="email"
      placeholder='Your Email'
      id="email"
      name="user_email"
      className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
    />
  </div>
  <div className="mb-4">
    <label htmlFor="message" className="text-sm leading-7 text-gray-600">
      Message
    </label>
    <textarea
      id="message"
      placeholder='Your Message'
      name="message"
      className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
      defaultValue={""}
    />
  </div>
  <button type="submit" value="Send" className="rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none">
    Send
  </button>
  <p className="mt-3 text-xs text-gray-500">
    Feel free to connect with us on social media platforms.
  </p>
</form>

                
                <div className="md:w-2/4">
                    <img src="https://iili.io/JAnThga.jpg" alt="" />
                </div>
            </div>
           
        </div>
        </div>
    );
};

export default ContactUs;