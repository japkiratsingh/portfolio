import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Experience from "./Components/Experience.jsx";
import Home from "./Components/Home.jsx";
import NavBar from "./Components/NavBar.jsx";
import Portfolio from "./Components/Portfolio.jsx";
import SocialLinks from "./Components/SocialLinks.jsx";

function App(){
  return (
    <div>
      <NavBar/>
      <Home/>
      <About />
      <Portfolio />
      <Experience />
      <Contact />

      <SocialLinks />
    </div>
  )
}

export default App;