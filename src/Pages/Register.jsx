import React from "react";
import Button from "../Components/Button";
import Header from "../Components/Header";
import galleryAbout1 from "../images/galleryImages/gallery-about1.jpg";
import Form from "../Components/Form";
function Register() {
  const data = [
    {
      setion: "headerSection",
      image:
        "https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      heading: "Register to join the next available class - April 23rd 2022",
      caption:
        "We are happy to report that we have some openings for the next sessions of our training programmes. ",
    },

    {
      section: "Second bottom section",
      image: galleryAbout1,
      heading: "Why Buckingham School of Engineering?",
      caption:
        "Whatever your background or skills, Buckingham School of Engineering is a great choice for your next educational step. We've helped people like you get the education they need to move ahead in their careers. So whether you're just beginning or ready to take the next step, we can help you reach your goals with our broad selection of training areas.",
    },
  ];

  return (
    <div>
      <Header
        headerImage={data[0].image}
        headerText={data[0].heading}
        headerParagraph={data[0].caption}
      />
      <h1 className="sm:text-4xl text-3xl text-[#2F2D2D] w-full  text-center  mb-20 sm:mt-20 mt-10 ">
        Registration Form
      </h1>
      <Form />

    </div>
  );
}

export default Register;
