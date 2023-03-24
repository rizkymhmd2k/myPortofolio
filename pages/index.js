import { Footer, Navbar, Navbar1 } from '../components';
import { About, Explore, Feedback, Hero, Insights, WhatsNew, World, Contact, HeroPage } from '../sections';

const Home = () => (
  <div className="bg-primary-black  ">
    <Navbar1 />
    <div className='overflow-hidden'>
      <HeroPage />
      {/* <div className="gradient-04 z-0" /> */}
      <World />
      {/* <div className="gradient-04 z-0" /> */}
      <WhatsNew />
      <Contact />
      <Footer />
    </div>
  </div>
);

export default Home;
