import React from "react";
import { motion } from "framer-motion";
import ResourceTable from "../Components/ResourceTable";

function PortalDashboard() {
  return (
    <div>
      <div className="w-full flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 2 }}
          className="sm:text-5xl text-3xl text-[#2F2D2D] w-full sm:w-1/2 text-center sm:mb-40 mb-20 sm:mt-20 mt-10 "
        >
          Welcome, to your Trainee Portal
        </motion.h1>
        <div
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1501768909872-92489434169d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)`,
          }}
          className="w-full sm:py-[6rem] py-[3rem] bg-cover bg-center  "
        >
          <div className="rounded-full ml-12 w-32 h-32 bg-red-300 "></div>
        </div>
      </div>

      <h1 className="text-center text-2xl my-8">Download Learning Resources</h1>

      <ResourceTable></ResourceTable>
    </div>
  );
}

export default PortalDashboard;
