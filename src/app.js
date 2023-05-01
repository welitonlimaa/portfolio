/* eslint-disable react/react-in-jsx-scope */
import './styles/App.css';
import './styles/components/Header.css';
import './styles/components/Banner.css';
import './styles/components/About.css';
import './styles/components/Projects.css';
import './styles/components/Footer.css';
import About from './components/About';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
