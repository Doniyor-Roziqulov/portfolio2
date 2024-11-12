import { useEffect } from "react";
import Portfolio from "../../components/portfolio/Portfolio";
import Using from "../../components/using/Using";
import AboutHero from "../../components/abouthero/AboutHero";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <AboutHero />
      <Using />
      <Portfolio />
    </>
  );
};

export default About;
