import { GiHamburgerMenu } from "react-icons/gi";
import bgAbout from "../../images/aboutbg.jpg";

interface HeaderProps {
  display: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

const AboutHero: React.FC<HeaderProps> = ({ setDisplay }) => {
  return (
    <section
      style={{ backgroundImage: `url(${bgAbout})` }}
      className=" min-h-96 md:min-h-screen bg-no-repeat bg-cover relative"
    >
      <button
        className="fixed top-5 right-5 z-50 lg:hidden"
        onClick={() => setDisplay(true)}
      >
        <GiHamburgerMenu className="text-white lg:text-black text-2xl" />
      </button>
      <div className="mx-auto container min-h-96  md:min-h-screen flex items-center justify-center">
        <h1 className="font-bold text-stone-300 text-6xl min-[700px]:text-[100px] lg:text-[200px]">
          ABOUT
        </h1>
      </div>
    </section>
  );
};

export default AboutHero;
