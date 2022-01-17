import React, { useState } from "react";
import DropDownSingleItem from "./DropDownSingleItem";

function DropDowns({ Title, courseList }) {
  const data = !courseList
    ? [
        {
          heading:
            "I don't have formal education; can I still join your course?",
          content:
            "Yes, as a College we train everybody who wants to become a building site engineer, we teach you all you need to know. The duration of the course depends on your pervious site experience, language ability and your determination to learn.",
        },
        {
          heading: "Will the training courses be fully practical ?",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
        },
        {
          heading: "How much do they cost?",
          content: "Please refer to price pages for latest updates",
        },
        {
          heading:
            "Will I be given a cerificate on completeion of my training ?",
          content:
            "The setting out and site surveying courses are valid UK qualifications recognised internationally.",
        },
        {
          heading: "How long does it take to complete the course?",
          content:
            "Weekend courses are flexible and duration depend on your background, students can study from one week full time to up to 3 month of Saturday sessions.",
        },
        {
          heading:
            " I am an overseas graduate in civil engineering, and when I ring agencies they want UK site experience which I don't have. Can I get this experience with you?",
          content:
            " Yes, our courses are based from office and an outdoor practice area. Our courses are hands on with lots of practice.",
        },
        {
          heading: "Where are the courses held?",
          content:
            "The courses are held at our offices from 10 Downing Street , Buckingham, London N3 1QA. We are just 5 min's walk Finchley Central tube station. We also have practice areas out door.",
        },
        {
          heading: "Do I need to come with my training kit?",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
        },
        {
          heading:
            "Can I make payments and defer my learning till when I am free?",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
        },
      ]
    : [
        {
          heading: "1. Setting out using Leica Total Station and GPS",
          content:
            "Weekend short courses in Robotics Total Stations for existing engineers and surveyours. Improve your chances of employment and earing potential by becoming a competent user of Robotics instruments.",
        },
        {
          heading: "2. AutoCAD / Civil 3D / BIM",
          content:
            "Weekend training courses in AutoCAD for Site engineers Improve your potential earning by becoming competent in using AutoCAD",
        },
        {
          heading: "3. Understanding Reinforcement (RC)",
          content: "Please refer to price pages for latest updates",
        },
        {
          heading: "4. Surveying",
          content:
            "The setting out and site surveying courses are valid UK qualifications recognised internationally.",
        },
        {
          heading: "5. Data Transfers (Excel / EDM)",
          content:
            "Weekend courses are flexible and duration depend on your background, students can study from one week full time to up to 3 month of Saturday sessions.",
        },
        {
          heading: "6. Levelling and Height Transfers",
          content:
            " Yes, our courses are based from office and an outdoor practice area. Our courses are hands on with lots of practice.",
        },
        {
          heading: "7. Understanding Drawings",
          content:
            "The courses are held at our offices from 10 Downing Street , Buckingham, London N3 1QA. We are just 5 min's walk Finchley Central tube station. We also have practice areas out door.",
        },
        {
          heading: "8. Calculations",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
        },
        {
          heading: "9. PDF/DXF/DWG/KML/KMZ/GIS",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
        },
      ];

  return (
    <div className=" sm:w-5/6 w-full items-center w-full flex flex-col ">
      <div className="text-[#4A4B50] text-3xl mt-36 mb-6 text-center">
        {Title}
      </div>
      <div className="w-full">
        {data.map((element) => (
          <DropDownSingleItem
            title={element.heading}
            content={element.content}
          />
        ))}
      </div>
    </div>
  );
}

export default DropDowns;
