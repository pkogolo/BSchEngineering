import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Button from "../Components/Button";
import TextInput from "../Components/TextInput";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { setUserSession } from "../Components/Services/AuthService";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  let history = useHistory();

  const API =
    "https://4xtuh4fsh7.execute-api.eu-west-2.amazonaws.com/prod/login";
  const apiKey = "nZwFSOSLiz3qQK8lcUMG9lEkqQKPrjp8hkHccIy9";

  const getUsername = (e) => {
    setUsername(e.target.value.toLowerCase());
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const payload = {
    username: username,
    password: password,
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (username.trim() === "" || password.trim() === "") {
      setErrorMessage("Both username and password are required");
      return;
    }

    const requestConfig = {
      headers: {
        "x-api-key": "nZwFSOSLiz3qQK8lcUMG9lEkqQKPrjp8hkHccIy9",
      },
    };

    axios
      .post(API, payload, requestConfig)
      .then((response) => {
        setUserSession(response.data.user, response.data.token);
        console.log("success");
        history.push("/portal");
      })
      .catch((error) => {
        console.error(error);
        if (error.response.status === 401 || error.response.status === 403) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage(
            "Sorry... the backend server is down, please try again later"
          );
        }
      });
  };

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
          <p className="text-center text-red-300">{errorMessage}</p>
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
          <div onClick={submitHandler}>
            <div className="flex items-center justify-center mt-8 cursor-pointer">
              <h1 className="font-bold text-center text-xl sm:text-3xl hover:text-[#A1C1F4]">
                Login
              </h1>
              <div className="sm:ml-8 ml-0 ">
                <svg
                  width={39}
                  height={39}
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.2 35.2C28.0365 35.2 35.2 28.0365 35.2 19.2C35.2 10.3634 28.0365 3.19995 19.2 3.19995C10.3634 3.19995 3.19995 10.3634 3.19995 19.2C3.19995 28.0365 10.3634 35.2 19.2 35.2Z"
                    stroke="#133574"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.2 25.6L25.6 19.2L19.2 12.8"
                    stroke="#133574"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.8 19.2H25.6"
                    stroke="#133574"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
