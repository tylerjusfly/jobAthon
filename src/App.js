import './assets/App.css';
import {withAuthenticator} from '@aws-amplify/ui-react'
import { Homepage } from './components/Homepage';
import { Navbar } from './components/Navbar';
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

function App({signOut, user}) {
  return (
    <div className="App">
      <Navbar/>
     <Homepage/>
     {user.attributes.email}
     <button onClick={signOut}> SignOut </button>
    </div>
  );
}

//this will make it , so that you need to login to acess the app component
export default withAuthenticator(App);
