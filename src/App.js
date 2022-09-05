import './assets/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FindJobs, Home, SingleJob } from './Pages';
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gigs/:gigsId" element={<SingleJob />} />
        <Route path="/jobs" element={<FindJobs />} />
      </Routes>
    </BrowserRouter>
  );
}

//this will make it , so that you need to login to acess the app component
export default App;
