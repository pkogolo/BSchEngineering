import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Button from "../Components/Button";
import TextInput from "../Components/TextInput";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const getUsername = (e) => {
    setUsername(e.target.value);
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  function login(api) {
    axios({ method: post, url: api });
  }

  return (
    <div>
      <Header
        headerImage={
          "https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        }
        headerText={"Log into your Learning portal"}
        headerParagraph={"Log into your training resource portal"}
      />

      <div className="form  flex  justify-center">
        <div className="sm:w-1/2 w-full bg-[rgba(255,255,255,0.6)] p-2">
          <TextInput
            title={"User name"}
            type="text"
            placeholder={"Enter your email address"}
            getFunction={getUsername}
          />
          <TextInput
            title={"Password"}
            type="password"
            placeholder={"Enter your secure password"}
            getFunction={getPassword}
          />
          <Button text={"Login"} />
        </div>
      </div>
    </div>
  );
}

export default Login;
