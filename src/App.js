import './assets/css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreateJob, FindJobs, Home, SingleJob } from './Pages';
import { Authenticator } from '@aws-amplify/ui-react';
// import { DataStore } from '@aws-amplify/datastore';
// import { GIGS } from './models';

// await DataStore.save(
//   new GIGS({
//   "title": "Lorem ipsum dolor sit amet",
//   "position": "Fullstack developer",
//   "location": "Lagos State",
//   "type": "Fulltime",
//   "company": "Lorem ipsum dolor sit amet",
//   "tags":  ['laravel', 'eloquent', 'SQL'],
//   "description": "Lorem ipsum dolor sit amet"
// })
// );
//{ signOut, user } props

function App() {
  return (
    <Authenticator.Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gigs/:gigsId" element={<SingleJob />} />
          <Route path="/jobs" element={<FindJobs />} />
          <Route path="/create-job" element={<CreateJob />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </Authenticator.Provider>
  );
}

//this will make it , so that you need to login to acess the app component
export default App;
