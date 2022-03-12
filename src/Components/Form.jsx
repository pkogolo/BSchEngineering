import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Form() {
  const [agreeToTC, setAgreeToTC] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aydyvfl",
        "template_eh6i3ev",
        form.current,
        "user_rXVRHJW6N4xVZUrPrHEOa"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} action="" className="sm:px-24 px-0">
        <div className="mt-4">
          <h1 className="py-2">Full Name</h1>
          <input
            type="text"
            placeholder="Enter your full Name here"
            className="w-full py-4 px-4 bg-[#F2F2F4] focus:outline-none"
            name="full_name"
          />
        </div>
        <div className="mt-4">
          <h1 className="py-2">Email Address</h1>
          <input
            type="text"
            placeholder="Enter your Email Address here"
            className="w-full py-4 px-4 bg-[#F2F2F4] focus:outline-none"
            name="email_address"
          />
        </div>
        <div className="mt-4">
          <h1 className="py-2">Phone Number</h1>
          <input
            type="text"
            placeholder="Enter your Phone Number here"
            className="w-full py-4 px-4 bg-[#F2F2F4] focus:outline-none"
            name="phone_number"
          />
        </div>
        <div className="mt-4">
          <h1 className="py-2">Current city/Location (Within the UK)</h1>
          <input
            type="text"
            placeholder="Which city do you stay within the UK?"
            className="w-full py-4 px-4 bg-[#F2F2F4] focus:outline-none"
            name="location"
          />
        </div>

        <div className="grid  grid-cols-1 sm:grid-cols-2 border-t mt-4 border-gray gap-5 ">
          <div className="mt-4">
            <h1 className="py-2">Are you currently working? (Yes/No)</h1>
            <input
              type="text"
              placeholder="Please reply with a yes or no"
              className="w-full py-4 px-4 bg-[#F2F2F4] focus:outline-none"
              name="working"
            />
          </div>
          <div className="mt-4">
            <h1 className="py-2">
              Do you prefer weekday classes or weekend only classes
            </h1>
            <input
              type="text"
              placeholder="Enter your learning schedule - Weekdays or weekend only "
              className="w-full py-4 px-4 bg-[#F2F2F4] focus:outline-none"
              name="class_preference"
            />
          </div>
        </div>

        <div className="flex  items-center justify-center my-16">
          <div
            onClick={() => {
              setAgreeToTC(!agreeToTC);
            }}
            className={
              !agreeToTC
                ? "w-8 h-8 border border-gray mr-4 rounded-sm"
                : "w-8 h-8 bg-[#081733] mr-4 rounded-sm"
            }
          >
            &nbsp;
          </div>
          <h1>I agree to the terms and conditions of this training</h1>
        </div>
      </form>

      <div
        onClick={sendEmail}
        className="flex items-center justify-center mt-8 cursor-pointer"
      >
        <h1
          style={{ color: `black` }}
          className="font-bold text-center text-xl sm:text-3xl hover:text-[#A1C1F4]"
        >
          Submit Registration form
        </h1>
        <div className="sm:ml-8 ml-0 ">
          <svg
            width={39}
            height={39}
            viewBox="0 0 39 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.2 35.2C28.0365 35.2 35.2 28.0365 35.2 19.2C35.2 10.3634 28.0365 3.19995 19.2 3.19995C10.3634 3.19995 3.19995 10.3634 3.19995 19.2C3.19995 28.0365 10.3634 35.2 19.2 35.2Z"
              stroke="#133574"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.2 25.6L25.6 19.2L19.2 12.8"
              stroke="#133574"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.8 19.2H25.6"
              stroke="#133574"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Form;
