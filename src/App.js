import './App.css';
import LandingPageCustomer from './components/Customer/LandingPageCustomer';
import { CarouselImgs, Cards } from './components/Styles/Cards'
import NavBar from './components/NavBar';



function App() {
 
    return (
    <div className="App">
      <NavBar/>
      <LandingPageCustomer/>
      <CarouselImgs/>
      <Cards/>
       
    </div>
  );
}
 
export default App;
