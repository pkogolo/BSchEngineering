import React, { useState, useEffect } from "react";
import axios from "axios";
import SVG from "./SVG";

function ResourceTable() {
  const [data, setData] = useState([]);
  const API =
    "https://svlsk7zdsb.execute-api.eu-west-2.amazonaws.com/prod/resources";

  function getData(api) {
    axios
      .get(api)
      .then((res) => {
        setData(res.data.courses);
      })
      .then((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    getData(API);
  }, []);

  function generateCards() {
    const array = data.map((item) => (
      <a
        target={"_blank"}
        href={item.url}
        className="bg-[#F6EFEF] hover:bg-[#ECECF5] items-center rounded-lg p-2 mb-4 flex justify-between w-full"
      >
        <div className="sm:flex hidden">
          <SVG type={"FILE"} />
        </div>
        <div className=" w-3/4">
          <a target={"_blank"} className="text-left text-sm" href={item.url}>
            {item.Module_tile.replace("+", " ")}
          </a>
        </div>

        <SVG type={"DOWNLOAD"} />
      </a>
    ));

    return array;
  }

  return <div>{generateCards()}</div>;
}

export default ResourceTable;
