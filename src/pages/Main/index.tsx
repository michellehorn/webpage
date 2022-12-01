import About from './components/About';
import Navbar from './components/Navbar';
import PresentationHeader from './components/PresentationHeader';
import imgAC from '../../assets/images/arms_closed.png';
import Projects from './components/Projects';
import Contact from './components/Contact';

const Main = () => {
  const handleMenuClick = (item: string) => (window.location.href = `#${item}`);

  return (
    <main>
      <img
        className='presentation-header--arms-closed-image'
        src={imgAC}
        alt='draw'
      />
      <Navbar onClick={(val) => handleMenuClick(val)} />
      <div className='home--content-box'>
        <PresentationHeader id='home' />
        <About id='about' />
        <Projects id='projects' />
        <Contact />
      </div>
    </main>
  );
};

export default Main;
