import React from "react";
import "./assets/css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Auth,
  Layout,
  CreateJob,
  FindJobs,
  MyPostedJobs,
  SingleJob,
} from "./Pages";
import { Authenticator } from "@aws-amplify/ui-react";
import ApplyForm from "./components/ApplyForm";
import { Homepage } from "./components/Homepage";
import { Applicants } from "./components/Applicants";

//{ signOut, user } props

function App() {
  return (
    <BrowserRouter>
      <Authenticator.Provider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="/signup" element={<Auth />} />
            <Route path="/gigs/:gigsId" element={<SingleJob />} />
            <Route path="/jobs" element={<FindJobs />} />
            <Route path="/apply/:gigsId" element={<ApplyForm />} />
            <Route path="/applicants/:gigsId" element={<Applicants />} />
            <Route path="/create-job" element={<CreateJob />} />
            <Route path="/myjobs" element={<MyPostedJobs />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Route>
        </Routes>
      </Authenticator.Provider>
    </BrowserRouter>
  );
}

//this will make it , so that you need to login to acess the app component
export default App;
