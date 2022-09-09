import React from "react";
import "./assets/css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Auth,
  CreateJob,
  FindJobs,
  Home,
  MyPostedJobs,
  SingleJob,
} from "./Pages";
import { Authenticator } from "@aws-amplify/ui-react";

//{ signOut, user } props

function App() {
  return (
    <Authenticator.Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Auth />} />
          <Route path="/gigs/:gigsId" element={<SingleJob />} />
          <Route path="/jobs" element={<FindJobs />} />
          <Route path="/create-job" element={<CreateJob />} />
          <Route path="/myjobs" element={<MyPostedJobs />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </Authenticator.Provider>
  );
}

//this will make it , so that you need to login to acess the app component
export default App;
