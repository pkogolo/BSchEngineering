import React, { Component } from "react";
import Button from "../Components/Button";
import CarouselGrid from "../Components/CarouselGrid";
import CompanyCarousel from "../Components/CompanyCarousel";
import Header from "../Components/Header";
import StaggeredGrid from "../Components/StaggeredGrid";
import TitleContentBox from "../Components/TitleContentBox";
import writing from "../images/writing.jpg";
import leica1 from "../images/leica-1.jpg";
import leica2 from "../images/leica-2.jpg";
import leica4 from "../images/leica-4.jpg";
import sitediaries from "../images/sitediaries.jpg";
import autocad1 from "../images/autocad-1.jpg";
import autocad2 from "../images/autocad-2.png";
import reinforcement2 from "../images/reinforcement-2.jpg";
import reinforcement3 from "../images/reinforcement-3.jpg";
import surveying3 from "../images/surveying-3.jpg";
import surveying2 from "../images/surveying-2.jpeg";
import levellingUp1 from "../images/galleryImages/gallery1_37.jpg";
import levellingUp2 from "../images/galleryImages/gallery1_29.jpg";
import levellingUp3 from "../images/galleryImages/gallery1_22.jpg";
import Carousel from "react-elastic-carousel";
import CourseCard from "../Components/CourseCard";
import headerImage from "../images/headerImage.jpg";
import levellingUp from "../images/levellingUp.jpg";
import topoSurveys from "../images/topoSurveys.jpg";
import topoSurveys2 from "../images/topoSurveys2.jpg";
import qualityAssurance from "../images/footerImage.jpg";
import CourseCarousel from "../Components/CourseCarousel";

function Home() {
  const image1 =
    "https://images.unsplash.com/photo-1598350741860-3d0776f02ca3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80.jpg";
  const image2 = autocad1;
  const image3 = autocad2;

  const autoCADArray = [
    "https://images.unsplash.com/photo-1581093196867-ca3dba3c721b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1581093067310-624c320ffd3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1581093206409-01076de81a1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  ];
  const settingOutArray = [
    surveying3,
    leica2,
    "https://images.unsplash.com/photo-1602014159194-2209155886e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  ];
  const levellingUpArray = [levellingUp1, levellingUp2, levellingUp3];
  const liecaStationArray = [leica1, leica2, leica4];
  const reinforcementArray = [
    "https://images.unsplash.com/photo-1569258592171-357ea26da4df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    reinforcement2,
    reinforcement3,
  ];

  const surveyingArray = [
    "https://images.unsplash.com/photo-1516689948391-3379ec7c7df0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
    "https://images.unsplash.com/photo-1521661488642-d86e85a90de2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1532154078493-c1c3eef2023c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  ];

  const data = [
    {
      setion: "headerSection",
      image: headerImage,
      heading:
        "Become a setting out Engineer in the construction industry. Obtain a diploma certificate in weeks. Earn from £250/day as a starting salary. Join Buckingham School of Civil and Setting Out Engineering to reshape your career.",
      caption:
        "Join our academy to learn the easy way of becoming a professional in Rail, Building, Roads, Oil, and general Construction Industries as a setting out Engineer.",
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

      <h1 className="w-full my-20 text-4xl text-center">
        What we would teach you
      </h1>

      <CourseCarousel />

      <div className="relative grid grid-col-1"></div>
      <div className=" sm:mt-20 mt-[38rem]">
        <Button text="View our full Curriculum" link={"/curriculum"} />
      </div>
      <TitleContentBox title="Learn from industry experts" paragraph="" />
      <div className="bg-[#081733] p-6">
        <CompanyCarousel />
      </div>

      <TitleContentBox
        title="Our Trainings are Practical Intensive"
        paragraph="No experience needed. Having an engineering background is not a prerequisite. You will be taught everything from scratch"
      />

      <StaggeredGrid />

      <Button text="Join our Next Class" link={"/register"} />
    </div>
  );
}

export default Home;
