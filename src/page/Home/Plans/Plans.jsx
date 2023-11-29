import { Link } from "react-router-dom";
import SectionTitle from "../../../components/section/SectionTitle";
import Container from "../../../components/ui/Container";


const Plans = () => {
    return (
<Container>
<div className="my-20">
<SectionTitle
          subHeading={"PLANS"}
          heading={"AFFORDABLE PRICE FOR ALL"}
        ></SectionTitle>
            <div className="grid grid-cols-1  md:grid-cols-3 md:pl-0">
                    <div className="relative border-2 border-cyan-900 flex max-w-[24rem] flex-col rounded-xl bg-gradient-to-tr from-cyan-600 to-pink-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
  <div className="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-gray-700 shadow-none">
    <p className="block text-center font-sans text-sm font-normal uppercase leading-normal text-white antialiased bg-cyan-950 border rounded-2xl py-2">
      FREE FOR 1 MONTH
    </p>
    <div className="mt-6 flex justify-between font-sans text-5xl font-normal tracking-normal text-white antialiased">
      <span className="self-end text-4xl">Premium Individual</span>
      <div className="text-end">
      <p className=" text-3xl">Free</p>
      <p className=" text-xs">FOR 1 MONTH</p>
      </div>
    </div>
  </div>
  <div className="p-0">
    <ul className="flex flex-col gap-4">
      <li className="flex items-center gap-4">
        <span className="rounded-full border border-white/20 bg-white/20 p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-3 w-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
        1 Premium account
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="rounded-full border border-white/20 bg-white/20 p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-3 w-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
        Cancel anytime
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="rounded-full border border-white/20 bg-white/20 p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-3 w-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
        15 hours/month of listening time from
our audiobooks subscriber catalog
        </p>
      </li>
    </ul>
  </div>
  <div className="mt-12 p-0">
<Link to={'/subscription'}>
<button
      className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-cyan-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-dark="true"
    >
      Try free for 1 month
    </button>
</Link>
  </div>
  <p className="text-xs text-center text-black mt-4">Free for 1 month, then $10.99 per month after. Offer only available if you havent tried Premium before.Terms Apply
Premium Duo</p>
                    </div>
                    <div className="relative border-2 border-red-500 flex w-full max-w-[24rem] flex-col rounded-xl bg-gradient-to-tr from-cyan-600 to-pink-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
  <div className="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-10 text-gray-700 shadow-none">
   
    <div className="mt-6 flex justify-between font-sans text-5xl font-normal tracking-normal text-white antialiased">
      <span className="self-end text-4xl">Premium <br /> Duo</span>
      <div className="text-end">
      <p className=" text-3xl">$14.99</p>
      <p className=" text-xs">FOR 1 MONTH</p>
      </div>
    </div>
  </div>
  <div className="p-0">
    <ul className="flex flex-col gap-4">
      <li className="flex items-center gap-4">
        <span className="rounded-full border border-white/20 bg-white/20 p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-3 w-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
        2 Premium account
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="rounded-full border border-white/20 bg-white/20 p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-3 w-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
        Cancel anytime
        </p>
      </li>
   
      <li className="flex items-center gap-4">
        <span className="rounded-full border border-white/20 bg-white/20 p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-3 w-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
        15 hours/month of listening time from
our audiobooks subscriber catalog (plan manager only)
        </p>
      </li>
    </ul>
  </div>
  <div className="mt-12 p-0">
    <Link to={'/subscription'}>
    <button
      className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-cyan-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-dark="true"
      >
      Get Premium Duo
    </button>
      </Link>
  </div>
  <p className="text-xs text-center text-black mt-4">For couples who reside at the same address. Terms Apply</p>
                    </div>
                    <div className="relative border-2 border-yellow-500 flex w-full max-w-[24rem] flex-col rounded-xl bg-gradient-to-tr from-cyan-600 to-pink-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
  <div className="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-10 text-gray-700 shadow-none">
   
    <div className="mt-6 flex justify-between font-sans text-5xl font-normal tracking-normal text-white antialiased">
      <span className="self-end text-4xl">Premium Family</span>
      <div className="text-end">
      <p className=" text-3xl">$16.99</p>
      <p className=" text-xs">FOR 1 MONTH</p>
      </div>
    </div>
  </div>
  <div className="p-0">
    <ul className="flex flex-col gap-4">
      <li className="flex items-center gap-4">
        <span className="rounded-full border border-white/20 bg-white/20 p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-3 w-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
        Up to 6 Premium or Kids accounts
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="rounded-full border border-white/20 bg-white/20 p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-3 w-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
        Block explicit music
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="rounded-full border border-white/20 bg-white/20 p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-3 w-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
        15 hours/month of listening time from
our audiobooks subscriber catalog (plan manager only)
        </p>
      </li>
    </ul>
  </div>
  <div className="mt-12 p-0">
    <Link to={'/subscription'}>
    <button
      className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-cyan-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-dark="true"
      >
      Get Premium Family
    </button>
      </Link>
  </div>
  <p className="text-xs text-center text-black mt-4">For couples who reside at the same address. Terms Apply</p>
                    </div>


            </div>

        </div>
</Container>
    );
};

export default Plans;