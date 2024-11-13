import { useEffect } from "react";
import Contacts from "../../components/contact/Contact";
import Dev from "../../components/dev/Dev";
import Hero from "../../components/hero/Hero";
import Portfolio from "../../components/portfolio/Portfolio";
import Skills from "../../components/skills/Skills";
import Using from "../../components/using/Using";

interface HeaderProps {
  display: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home: React.FC<HeaderProps> = ({ display, setDisplay }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero display={display} setDisplay={setDisplay} />
      <Dev />
      <Skills />
      <Using />
      <Portfolio />
      <Contacts />
    </div>
  );
};

export default Home;
