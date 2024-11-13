import { useEffect } from "react";
import Contacts from "../../components/contact/Contact";
import ContactHero from "../../components/contacthero/ContactHero";

interface HeaderProps {
  display: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

const Contact: React.FC<HeaderProps> = ({ display, setDisplay }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ContactHero display={display} setDisplay={setDisplay} />
      <Contacts />
    </>
  );
};

export default Contact;
