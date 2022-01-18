import React from "react";
import DropDownForms from "./DropDownForms";
import TextInput from "./TextInput";

function Form() {
  const options = {
    employmentOptions: [
      "Yes (Full time)",
      "No (unemployed)",
      "Part-time",
      "Student",
    ],
    cohortOptions: [
      "Winter Cohort (November - January)",
      "Spring cohort ( February - April)",
      "Summer cohort ( June - August)",
      "Fall cohort ( September - November)",
    ],
  };

  return (
    <div>
      <form action="" className="sm:px-24 px-0">
        <TextInput
          title={"Full Name"}
          placeholder={"Enter your full name here"}
        />
        <TextInput
          title={"Email Address"}
          placeholder={"Enter your Email Address here"}
        />
        <TextInput
          title={"Phone Number"}
          placeholder={"Enter your Phone Number here"}
        />
        <TextInput
          title={"Current city/Location (Within the UK)"}
          placeholder={"Which city do you stay within the UK?"}
        />

        <div className="grid  grid-cols-1 sm:grid-cols-2 border-t mt-4 border-gray gap-5 ">
          <DropDownForms
            title={"Are you currently working?"}
            optionArray={options.employmentOptions}
          />
          <DropDownForms
            title={"Which cohort would you like to join?"}
            optionArray={options.cohortOptions}
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
