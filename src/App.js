import React from "react";
import "./assets/css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Auth,
  Layout,
  MyPostedJobs,
  SingleJob,
  NotFound,
  CreateJobs,
  Homepage,
  AllJobs,
} from "./Pages";
import { Authenticator } from "@aws-amplify/ui-react";
import ApplyForm from "./components/ApplyForm";
import { Applicants } from "./components/Applicants";
// import AppliedJobs from "./components/AppliedJobs";

function App() {
  return (
    <BrowserRouter>
      <Authenticator.Provider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="/signup" element={<Auth />} />
            <Route path="/gigs/:gigsId" element={<SingleJob />} />
            <Route path="/jobs" element={<AllJobs />} />
            <Route path="/apply/:gigsId" element={<ApplyForm />} />
            <Route path="/applicants/:gigsId" element={<Applicants />} />
            <Route path="/create-job" element={<CreateJobs />} />
            <Route path="/myjobs" element={<MyPostedJobs />} />
            {/* <Route path="/appliedjobs" element={<AppliedJobs />} /> */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Authenticator.Provider>
    </BrowserRouter>
  );
}

//this will make it , so that you need to login to acess the app component
export default App;
