import './App.css';
import LandingPageCustomer from './components/Customer/LandingPageCustomer';
import { CarouselImgs } from './components/Styles/Cards'
import NavBar from './components/NavBar';


function App() {
 
    return (
    <div className="App">
      <NavBar/>
      <LandingPageCustomer/>
      <CarouselImgs/>
       
    </div>
  );
}
 
export default App;
