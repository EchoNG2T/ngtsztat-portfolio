import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Porfile from "./components/Porfile";
import SocialLinks from "./components/SocialLinks";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Porfile />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
