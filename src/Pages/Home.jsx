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

function Home() {
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
      image: HeaderImage,
      heading: "Training world class setting-out engineers",
      caption:
        "We are a top-ranked civil engineering academy focused on bridging the gap between university and the industry.",
    },
  ];

  const TextArray = [
    "AutoCAD / Civil 3D / BIM",
    "Leica station",
    "Understanding Reinforcements",
    "Surveying",
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
          topArray={autoCADArray}
          leftArray={liecaStationArray}
          rightArray={reinforcementArray}
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
        paragraph="Our state of the art equipment is designed to support our practical intensive curriculum. You will not only learn how to solve real-world problems and build projects, you will be encouraged to take them apart and put them back together. Our facilities are designed so that you can test, apply, and demonstrate your knowledge and skills in every course you take"
      />

      <StaggeredGrid />

      <Button text="Join our Next Cohort" link={"/register"} />
    </div>
  );
}

export default Home;
