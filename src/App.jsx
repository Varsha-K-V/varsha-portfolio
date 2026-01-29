import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import ProjectGallery from "./sections/ProjectGallery";

function App(){
  return(
   <div className="app">
      <Navbar />

      <main className="main-content">
        <Hero />
        <Skills />
        <Projects />
        <ProjectGallery />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
export default App;