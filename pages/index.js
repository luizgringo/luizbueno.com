import { useRef } from 'react';

import HeadSection from '../components/atoms/head-section';
import NavBar from '../components/molecules/navbar';
import Jumbotron from '../components/molecules/jumbotron';
import Hero from '../components/molecules/hero';
import Social from '../components/molecules/social';
import Whatsapp from '../components/molecules/whatsapp';
import Footer from '../components/molecules/footer';
import Portifolio from '../components/molecules/portifolio';

const Home = () => {
  const homeRef = useRef(null);
  const portifolioRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className='main'>
      <HeadSection />
      <NavBar homeRef={homeRef} contactRef={contactRef} portifolioRef={portifolioRef}/>
      <Jumbotron />
      <Hero />
      <Portifolio portifolioRef={portifolioRef}/>
      <Social />
      <Whatsapp />
      <Footer contactRef={contactRef}/>
    </div>
  );
};

export default Home;
