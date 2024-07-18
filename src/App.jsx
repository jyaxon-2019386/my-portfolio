import styles from './App.module.css';
import { About } from './Components/About/About.jsx';
import { Hero } from './Components/Hero/Hero.jsx';
import { Navbar } from './Components/Navbar/Navbar.jsx';
import { Skills } from './Components/Skills/Skills.jsx';
import { Projects } from './Components/Project/Projects.jsx';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
