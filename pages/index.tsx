import Awards from '../components/Awards';
import Concept from '../components/Concept';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Office from '../components/Office';
import Publications from '../components/Publications';
import Slider from '../components/Slider';
import WhoWeAre from '../components/WhoWeAre';

const Home = () => {
  return (
    <div className='text-[#e7e7e7] uppercase'>
      <Header />
      <Slider />
      <WhoWeAre />
      <Concept />
      <Publications />
      <Awards />
      <Office />
      <Footer />
    </div>
  )
}


export default Home;