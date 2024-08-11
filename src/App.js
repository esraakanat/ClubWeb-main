import './App.css';
import Hero from './Component/Hero/Hero';
import Plan from './Component/Plans/Plan';
import Testimonials from './Component/Testimonials/Testimonials';
import Programs from './Component/Programs/Programs';
import Reasons from './Component/Reasons/Reasons';
import Join from './Component/Join/Join';
import Footer from './Component/Footer/Footer';

import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

function App() {
  return (
    <div className="App" dir='rtl'>
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plan/>
      <Testimonials/>
      <Join/>
      <Footer/>

    </div>
  );
}

export default App;
