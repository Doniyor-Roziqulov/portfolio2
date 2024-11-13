import { GiHamburgerMenu } from "react-icons/gi";
import bgimg from "../../images/contactbg.jpg";

interface HeaderProps {
  display: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContactHero: React.FC<HeaderProps> = ({ display, setDisplay }) => {
  return (
    <section
      style={{ backgroundImage: `url(${bgimg})` }}
      className="min-h-screen bg-no-repeat bg-cover relative"
    >
      <button
        className="absolute top-5 right-5 z-50 lg:hidden"
        onClick={() => setDisplay(true)}
      >
        <GiHamburgerMenu className="text-white text-2xl" />
      </button>
      <div className="mx-auto container min-h-screen flex items-center justify-center">
        <h1 className="font-bold text-stone-300 text-6xl min-[700px]:text-[100px] lg:text-[200px]">
          CONTACT
        </h1>
      </div>
    </section>
  );
};

export default ContactHero;
