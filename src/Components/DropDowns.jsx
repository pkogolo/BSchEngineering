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
          content: "The training courses would be practical heavy",
        },
        {
          heading: "How much do they cost?",
          content: "Please refer to price pages for latest updates",
        },
        {
          heading:
            "Will I be given a cerificate on completeion of my training ?",
          content:
            "Yes, trainees who complete the training programme would be given their earned certificates",
        },
        {
          heading: "How long does it take to complete the course?",
          content:
            "Week day programmes last for two weeks. Weekend programmes run for two months",
        },
        {
          heading:
            " I am an overseas graduate in civil engineering, and when I ring agencies they want UK site experience which I don't have. Can I get this experience with you?",
          content:
            " Yes, our courses are based from office and an outdoor practice area. Our courses are hands-on with lots of practice.",
        },
        {
          heading: "Where are the courses held?",
          content: "TMiddle Blackgrove farm, Quainton, Aylesbury HP22 4AD ",
        },
        {
          heading: "Do I need to come with my training kit?",
          content:
            "No you do not need to come with your training kit as this would be provided for you",
        },
        {
          heading:
            "Can I make payments and defer my learning till when I am free?",
          content:
            "Yes you can make payments and defer your learning till you are free",
        },
      ]
    : [
        {
          heading: "1. Precise Setting Out",
          content:
            "Weekend short courses in Robotics Total Stations for existing engineers and surveyours. Improve your chances of employment and earing potential by becoming a competent user of Robotics instruments.",
        },
        {
          heading: "2. Levelling up",
          content:
            "Weekend training courses in AutoCAD for Site engineers Improve your potential earning by becoming competent in using AutoCAD",
        },
        {
          heading: "3. Grids and ref lines",
          content: "Please refer to price pages for latest updates",
        },
        {
          heading: "4. Site Diaries",
          content:
            "The setting out and site surveying courses are valid UK qualifications recognised internationally.",
        },
        {
          heading: "5. ITPs",
          content:
            "Weekend courses are flexible and duration depend on your background, students can study from one week full time to up to 3 month of Saturday sessions.",
        },
        {
          heading: "6. Quality Assurance",
          content:
            " Yes, our courses are based from office and an outdoor practice area. Our courses are hands on with lots of practice.",
        },
        {
          heading: "7. Autocad",
          content:
            "The courses are held at our offices from 10 Downing Street , Buckingham, London N3 1QA. We are just 5 min's walk Finchley Central tube station. We also have practice areas out door.",
        },
        {
          heading: "8. Topo Surveys",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
        },
        {
          heading: "9. Reading Drawings",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
        },
        {
          heading: "10. RAMS, WPP, TBS",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
        },
        {
          heading: "11. Basic Excel ",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
        },
        {
          heading: "12. Structural Monitoring",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
        },
        {
          heading: "13. Power Point",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
        },
        {
          heading: "14. Microsoft Outlook ",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
        },
        {
          heading: "15. Fieldview",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle",
        },
        {
          heading: "16. Documentations",
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
