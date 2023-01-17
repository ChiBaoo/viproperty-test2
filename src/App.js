
import './App.css';
import {  Routes,  Route} from "react-router-dom";
import ResponsiveAppBar from './components/navigation';
import Home from './components/Home'
import Rent from './components/Rent'
import Buy from './components/Buy';
import SendingForm from './components/SendingForm';
import MarketResearch from './components/MarketResearch';
import InvestmentPolicy from './components/InvestmentPolicy';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import SwipeableTextMobileStepper from './test/test';
import Test2 from './test/test2';
import Test3 from './test/Test3';
function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/sendMail' element={<SendingForm/>} ></Route>
        <Route path='/buy' element={<Buy/>} ></Route>
        <Route path='/rent' element={<Rent />} ></Route>
        <Route path='/marketResearch' element={<MarketResearch/>} ></Route>
        <Route path='/investmentPolicy' element={<InvestmentPolicy/>} ></Route>
        {/* <Route path='/contact' element={<Contact/>} ></Route> */}
        <Route path='/about' element={<About/>} ></Route>
        {/* <Route path='/detail/:id' element={<Detail/>}></Route> */}
      </Routes>
      {/* <ActionAreaCard/> */}
      {/* <SwipeableTextMobileStepper/> */}
      {/* <Test2/> */}
      {/* <Test3 /> */}
      <Footer/>
    </div>
  );
}

export default App;
