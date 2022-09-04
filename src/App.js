import './assets/App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Homepage } from './components/Homepage';
import { Singlecard } from './components/Singlecard';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

function App({ signOut, user }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Navbar />
              <Homepage />
              {user.attributes.email}
              <button onClick={signOut}> SignOut </button>
            </div>
          }
        />
        <Route path="/gigs/:gigsId" element={<Singlecard />} />
      </Routes>
    </BrowserRouter>
  );
}

//this will make it , so that you need to login to acess the app component
export default withAuthenticator(App);
