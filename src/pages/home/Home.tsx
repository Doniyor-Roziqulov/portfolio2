import { useEffect } from "react";
import Contacts from "../../components/contact/Contact";
import Dev from "../../components/dev/Dev";
import Hero from "../../components/hero/Hero";
import Portfolio from "../../components/portfolio/Portfolio";
import Skills from "../../components/skills/Skills";
import Using from "../../components/using/Using";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <Dev />
      <Skills />
      <Using />
      <Portfolio />
      <Contacts />
    </div>
  );
};

export default Home;
