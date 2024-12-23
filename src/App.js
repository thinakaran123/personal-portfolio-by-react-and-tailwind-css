import Header from './components/header';
import './App.css';
import Hero from './components/hero';
import Aboutme from './components/aboutme';
import Projects from './components/projects';
import Contact from './components/contact';

function App() {
  return (

    <div className="App">
      <Header/>
      <Hero/> 
      <Aboutme/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
