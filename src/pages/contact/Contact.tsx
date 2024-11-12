import { useEffect } from "react";
import Contacts from "../../components/contact/Contact";
import ContactHero from "../../components/contacthero/ContactHero";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ContactHero />
      <Contacts />
    </>
  );
};

export default Contact;
