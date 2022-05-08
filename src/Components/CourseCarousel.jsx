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

function CourseCarousel() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 300, itemsToShow: 1.5, itemsToScroll: 1, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
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
      image:
        "https://images.pexels.com/photos/4792491/pexels-photo-4792491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "We would teach you how to read and understand construction drawings and interpret blueprints",
    },
    {
      text: "Basic Excel",
      image:
        "https://p.kindpng.com/picc/s/133-1335617_microsoft-excel-logo-png-ms-office-excel-logo.png",
      description:
        "We would teach you how to use Microsoft Excel to create spreadsheets, perform simple calculations and organize your tasks",
    },
    {
      text: "Structural Monitoring",
      image: reinforcement2,
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
      <Carousel itemsToShow={4} itemsToScroll={2} breakPoints={breakPoints}>
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
    </div>
  );
}

export default CourseCarousel;
