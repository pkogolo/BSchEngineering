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

  const lectureCards = [
    {
      text: "Precise Setting Out",
      image: topoSurveys,
      description:
        "This course is perfect for those who have no or little knowledge of surveying. Learn how to conduct surveys using insustry standard tools and transfer to AutoCAD",
    },

    {
      text: "Autocad",
      image:
        "https://i.pinimg.com/originals/74/b5/88/74b588b71149a0eb7eadf6b5338e09d7.png",
      description:
        "We will teach you how to perform  engineering construction designs using AutoCAD, and how to create 2d and 3d engineering models",
    },
    {
      text: "Topo Surveys",
      image: topoSurveys2,
      description:
        "We will teach you how to locate all surface features of a property, represent them on paper, showing all  the natural features and elevations. ",
    },
    {
      text: "Grids and ref lines",
      image:
        "https://images.unsplash.com/photo-1532154078493-c1c3eef2023c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      description:
        "You wil learn how to use grid and ref lines to describe locatrions on topographic maps.",
    },
    {
      text: "Site Diaries",
      image: sitediaries,
      description:
        "We will teach you how to create site diaries which would daily record the significant occurrences, incidents and progress made on a jobsite which you would be managing.",
    },
    {
      text: "ITPs",
      image: writing,
      description:
        "You would learn how to write An Inspection & Test Plan (ITP) document to   describe the plan for managing the quality control and assurance of a particular element of a construction work.",
    },
    {
      text: "Quality Assurance",
      image: qualityAssurance,
      description:
        "Quality assurance is a method of avoiding potential mistakes in a construction project by creating 'rules' about minimum quality, while ensuring all decisions ",
    },
    {
      text: "Reading Drawings",
      image: leica2,
      description:
        "We would teach you how to read and understand construction drawings and interpret blueprints",
    },
    {
      text: "Basic Excel",
      image: leica2,
      description: "learn the benefits of making money",
    },
    {
      text: "Structural Monitoring",
      image: leica2,
      description: "learn the benefits of making money",
    },
    {
      text: "Power Point",
      image: leica2,
      description: "learn the benefits of making money",
    },
    {
      text: "Microsoft Outlook",
      image: leica2,
      description: "learn the benefits of making money",
    },
    {
      text: "Fieldview",
      image: leica2,
      description: "learn the benefits of making money",
    },
    {
      text: "Documentations",
      image: leica2,
      description: "learn the benefits of making money",
    },
    {
      text: "Levelling up",
      image: levellingUp,
      description: "learn the benefits of making money",
    },
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

      <Carousel itemsToShow={4} itemsToScroll={2}>
        {lectureCards.map((item, index = 0) => (
          <CourseCard
            key={(index += 1)}
            text={item.text}
            photo={item.image}
            description={item.description}
            number={(index += 1)}
          />
        ))}
      </Carousel>

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
