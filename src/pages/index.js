import Acomplishments from '../components/Acomplishments/Acomplishments';
// import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import About from '../components/About/About';
import Header from '../components/Header/Header';
import Photo from '../components/Photo/Photo';

import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Technologies />
      <Timeline />
      <Projects />
      <Photo />
      <Footer />
    </>
    
  );
};

export default Home;
