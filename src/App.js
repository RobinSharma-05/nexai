import logo from './logo.svg';
import './App.css';
import './root.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from './components/HeroSection';
import PoveredHome from './components/PoveredHome';
import FooterSection from './components/FooterSection';
import Footer_uper from './components/Footer_uper';
import Ai_bg_gif from './components/Ai_bg_gif';
import TimeLine from './components/TimeLine';
import Blockchain from './components/Blockchain';
import Sliders from './components/Sliders';
import Features from './components/Features';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from './components/common/Loader';
import BackToTop from './components/common/BackToTop';


function App() {
  return (
    <div className='bg_color'>
      <Loader />
      <BackToTop />
      <HeroSection />
      <PoveredHome />
      <Features />
      <Blockchain />
      <Sliders />
      <Ai_bg_gif />
      <TimeLine />
      <Footer_uper />
      <FooterSection />
    </div>
  );
}

export default App;
