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
import leica3 from "../images/leica-3.jpg";
import autocad1 from "../images/autocad-1.jpg";
import autocad2 from "../images/autocad-2.png";
import reinforcement2 from "../images/reinforcement-2.jpg";
import reinforcement3 from "../images/reinforcement-3.jpg";
import surveying3 from "../images/surveying-3.jpg";
import surveying2 from "../images/surveying-2.jpeg";
import levellingUp1 from "../images/galleryImages/gallery1_37.jpg"
import levellingUp2 from "../images/galleryImages/gallery1_29.jpg"
import levellingUp3 from "../images/galleryImages/gallery1_22.jpg"

function Home() {
  const image1 =
    "https://images.unsplash.com/photo-1598350741860-3d0776f02ca3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80.jpg";
  const image2 = autocad1;
  const image3 = autocad2;

  const autoCADArray = [image1, image2, image3];
  const settingOutArray = [surveying3, leica2, leica3];
  const levellingUpArray = [levellingUp1, levellingUp2, levellingUp3];
  const liecaStationArray = [leica1, leica2, leica4];
  const reinforcementArray = [
    "https://images.unsplash.com/photo-1569258592171-357ea26da4df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    reinforcement2,
    reinforcement3,
  ];

  const surveyingArray = [
    "https://images.unsplash.com/photo-1628158145409-9e222b56cc0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1543&q=80",
    surveying2,
    surveying3,
  ];

  const data = [
    {
      setion: "headerSection",
      image: surveying2,
      heading:
        "Progress your career into the construction industry from here. Earn £400+ per day.",
      caption:
        "Join our academy to learn the easy way of becoming a professional in Rail, Building, Roads, Oil, and general Construction Industries as an Engineer. ",
    },
  ];

  const TextArray = [
    "Precise Setting Out",
    "Levelling up",
    "Autocad",
    "Topo Surveys",
  ];

  return (
    <div>
      <Header
        headerImage={data[0].image}
        headerText={data[0].heading}
        headerParagraph={data[0].caption}
      />

      <h1 className="w-full my-20 text-4xl text-center">What we teach</h1>

      <div className="relative grid grid-col-1">
        <CarouselGrid
          showText={true}
          topArray={settingOutArray}
          leftArray={levellingUpArray}
          rightArray={autoCADArray}
          bottomArray={surveyingArray}
          textArray={TextArray}
        />
      </div>
      <div className=" sm:mt-[80rem] mt-[40rem]">
        <Button text="View our full Curriculum" link={"/curriculum"} />
      </div>

      <TitleContentBox
        title="Learn from industry experts"
        paragraph="We have a very experienced team of professionals who have vast
          experience in their field. Our advisors are people who have succeeded
          in the civil engineering field, having worked at big firms such as
          Arup and Mott MacDonald. They help us students to understand what will
          be expected of them once they enter the industry."
      />

      <CompanyCarousel />

      <TitleContentBox
        title="Practical intensive training"
        paragraph="No experience needed. Having an engineering background is not a prerequisite. You will be taught everything from the very foundation"
      />

      <StaggeredGrid />

      <Button text="Join our Next Cohort" link={"/register"} />
    </div>
  );
}

export default Home;
