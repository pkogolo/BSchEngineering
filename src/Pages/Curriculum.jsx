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
import autocad1 from "../images/autocad-1.jpg";
import autocad2 from "../images/autocad-2.png";
import reinforcement2 from "../images/reinforcement-2.jpg";
import reinforcement3 from "../images/reinforcement-3.jpg";
import surveying3 from "../images/surveying-3.jpg";
import surveying2 from "../images/surveying-2.jpeg";
import DropDowns from "../Components/DropDowns";

function Curriculum() {
  const image1 =
    "https://images.unsplash.com/photo-1598350741860-3d0776f02ca3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80.jpg";
  const image2 = autocad1;
  const image3 = autocad2;

  const autoCADArray = [image1, image2, image3];
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
      image:
        "https://images.unsplash.com/photo-1581141849291-1125c7b692b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=866&q=80",
      heading:
        "Our curriculum equips our students with top-notch skills in setting out engineering to be able to excel in today's industry.",
      caption:
        "Here at Buckingham School of Engineering, we offer a unique approach to our trainings. Our curriculum teaches the top in-demand skills with a perfect blend of theory and practical. Thus, our student's are highly funcitonal in the setting-out industry immediately after they receive their training certification ",
    },
  ];

  const TextArray = [
    "Precise Setting Out",
    "Levelling up",
    "Grids and ref lines",
    "Site Diaries",
    "ITPs",
    "Quality Assurance ",
    "Autocad",
    "Topo Surveys",
    "Reading Drawings",
    "RAMS, WPP, TBS",
    "Basic Excel ",
    "Structural Monitoring",
    "Power Point",
    "Microsoft Outlook ",
    "Fieldview ",
    "Documentations ",
  ];
  return (
    <div>
      <Header
        headerImage={data[0].image}
        headerText={data[0].heading}
        headerParagraph={data[0].caption}
      />

      <h1 className="w-full my-20 text-4xl text-center">What we teach</h1>

      <div className=" grid-flow-row auto-rows-max">

        <div className="">
        <CarouselGrid
          showText={true}
          topArray={autoCADArray}
          leftArray={liecaStationArray}
          rightArray={reinforcementArray}
          bottomArray={surveyingArray}
          textArray={TextArray.slice(0, 3)}
          small={true}
        />
          </div>
       
        <CarouselGrid
          showText={true}
          topArray={autoCADArray}
          leftArray={liecaStationArray}
          rightArray={reinforcementArray}
          bottomArray={surveyingArray}
          textArray={TextArray.slice(4, 7)}
          small={true}
        />
        <CarouselGrid
          showText={true}
          topArray={autoCADArray}
          leftArray={liecaStationArray}
          rightArray={reinforcementArray}
          bottomArray={surveyingArray}
          textArray={TextArray.slice(7)}
          small={true}
        />
      </div>
      <div className=" ">
        <Button text="Register for your next class" link={"/register"}/>
      </div>

      <div className="flex w-full items-center justify-center">
        <DropDowns Title="Course List" courseList={true} />
      </div>
    </div>
  );
}

export default Curriculum;
