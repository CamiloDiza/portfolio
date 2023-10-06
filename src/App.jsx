import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Skills />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
