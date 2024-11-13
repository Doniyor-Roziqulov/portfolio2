import { useEffect } from "react";
import Portfolio from "../../components/portfolio/Portfolio";
import Using from "../../components/using/Using";
import AboutHero from "../../components/abouthero/AboutHero";

interface HeaderProps {
  display: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

const About: React.FC<HeaderProps> = ({ display, setDisplay }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <AboutHero display={display} setDisplay={setDisplay} />
      <Using />
      <Portfolio />
    </>
  );
};

export default About;
