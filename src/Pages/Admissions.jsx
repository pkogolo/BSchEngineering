import React from "react";
import Button from "../Components/Button";
import CarouselGrid from "../Components/CarouselGrid";
import CompanyCarousel from "../Components/CompanyCarousel";
import Header from "../Components/Header";
import StaggeredGrid from "../Components/StaggeredGrid";
import TitleContentBox from "../Components/TitleContentBox";
import HeaderImage from "../images/home-1.jpg";
import leica1 from "../images/leica-1.jpg";
import leica2 from "../images/leica-2.jpg";
import leica4 from "../images/leica-4.jpg";
import reinforcement2 from "../images/reinforcement-2.jpg";
import reinforcement3 from "../images/reinforcement-3.jpg";
import surveying3 from "../images/surveying-3.jpg";
import surveying2 from "../images/surveying-2.jpeg";
import GalleryGrid from "../Components/GalleryGrid";
import DropDowns from "../Components/DropDowns";

function Admissions() {
  const array = [
    "https://images.unsplash.com/photo-1485627941502-d2e6429a8af0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1525286335722-c30c6b5df541?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1481234877003-b379d46b7f2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80",
  ];

  const data = [
    {
      setion: "headerSection",
      image:
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80",
      heading: "We are currently accepting Admissions",
      caption:
        "We are happy to report that we have some openings throughout the year for all our classes. The next class starts on the 16th of June 2022 ",
    },
  ];
  return (
    <div>
      <Header
        headerImage={data[0].image}
        headerText={data[0].heading}
        headerParagraph={data[0].caption}
      />

      <h1 className="w-full my-20 text-4xl text-center">Available Classes</h1>

      {/* <GalleryGrid imageArray={array} /> */}

      <TitleContentBox
        title="Our Classes run Throughout the Year"
        paragraph="We welcome students throughout the year and we run flexible class structures/n You can either take a straight two-week session and you get your certificate, or our weekend classes for a duration of two months, then get your certificate.
        "
      />
      <TitleContentBox
        title="Tuition and Fees"
        paragraph="Buckingham School of Engineering offers a training format that is ideal for working students. The fees per class will remain the same throughout the year, meaning when you want to start or finish your studies there are no hidden costs./n The tuition fee for each session is £2,200 for the entire session duration./n  This covers the expenses in training equipment, training manuals and personal protective equipment"
      />

      <Button text="Enroll Now" link={"/register"} color="#68696F" />

      <div className="flex w-full items-center justify-center">
        <DropDowns Title="FAQs" />
      </div>
    </div>
  );
}

export default Admissions;
