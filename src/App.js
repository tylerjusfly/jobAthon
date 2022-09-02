import './assets/App.css';
import {withAuthenticator} from '@aws-amplify/ui-react'
import { Homepage } from './components/Homepage';
import { Navbar } from './components/Navbar';


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
