import React from "react";
import Button from "../Components/Button";
import Header from "../Components/Header";
import TitleContentBox from "../Components/TitleContentBox";
import Gallery1 from "../images/galleryImages/gallery4.jpeg";
import Gallery3 from "../images/galleryImages/gallery2.jpg";
import Gallery2 from "../images/galleryImages/gallery3.jpg";
import Gallery4 from "../images/galleryImages/gallery5.jpg";
import galleryAbout1 from "../images/galleryImages/gallery-about1.jpg";
import CarouselGrid from "../Components/CarouselGrid";
import DropDowns from "../Components/DropDowns";
import Carousel from "../Components/Carousel";

function About() {
  const data = [
    {
      setion: "headerSection",
      image:
        "https://images.unsplash.com/photo-1512187849-463fdb898f21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
      heading: "We are here to bridge the gap between college and the industry",
      caption:
        "Buckingham School of Civil and Setting Out Engineering was recently established with an aim to bridge the gap of Engineering Shortage in construction industry.",
    },

    {
      section: "Second bottom section",
      image: galleryAbout1,
      heading: "Why Buckingham School of Engineering?",
      caption:
        "Whatever your background or skills, Buckingham School of Engineering is a great choice for your next educational step. We've helped people like you get the education they need to move ahead in their careers. So whether you're just beginning or ready to take the next step, we can help you reach your goals with our broad selection of training areas.",
    },
  ];

  const topImages = [Gallery1, Gallery2, Gallery3];
  const leftImages = [Gallery4, Gallery2, Gallery3];
  const rightImages = [Gallery4, Gallery2, Gallery3];
  const bottomImages = [Gallery4, Gallery2, Gallery3];

  return (
    <div>
      <Header
        headerImage={data[0].image}
        headerText={data[0].heading}
        headerParagraph={data[0].caption}
      />

      <div className="relative grid grid-col-1">
      <Carousel array={topImages} />
        {/* <CarouselGrid
          showText={false}
          topArray={topImages}
          leftArray={leftImages}
          rightArray={rightImages}
          bottomArray={bottomImages}
          
        /> */}
      </div>
      <div className=" sm:mt-[80rem] mt-[40rem]">
        <Button text="View our  gallery" />
      </div>

      

      <TitleContentBox
        title=""
        paragraph="As Setting out engineers progress to site engineers, site engineers progress to senior engineers, to sub-agents, agents, Project managers etc, the industry leaves a huge gap at the entry levels - assistant engineers / chain men."
      />

      <Header
        headerImage={data[1].image}
        headerText={data[1].heading}
        headerParagraph={data[1].caption}
      />

      <Button text="Join our Next Cohort" />

      <div className="flex w-full items-center justify-center">
        <DropDowns Title="FAQs" />
      </div>
    </div>
  );
}

export default About;
