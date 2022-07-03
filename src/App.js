import './App.css';
import LandingPageCustomer from './components/Customer/LandingPageCustomer';
import { CarouselImgs } from './components/Styles/Cards'
import NavBar from './components/NavBar';


function App() {
 //For later use, create state for roles of users and allow the landing page to be based on the current user. 
    return (
    <div className="App">
      <NavBar/>
      {/* [customer, admin, superuser].includes(state of current user) : Method will determine the user role and change the landing page */}
      <LandingPageCustomer/>
      <CarouselImgs/>
       
    </div>
  );
}
 
export default App;
