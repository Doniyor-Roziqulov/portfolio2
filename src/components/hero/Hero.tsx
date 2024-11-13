import { useTypewriter, Cursor } from "react-simple-typewriter";
import heroimg from "../../images/developer-with-ai-generated-free-png.webp";
import TextSpan from "../textspan/TextSpan";
import { GiHamburgerMenu } from "react-icons/gi";

interface HeaderProps {
  display: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hero: React.FC<HeaderProps> = ({ setDisplay }) => {
  const [text] = useTypewriter({
    words: ["Front-End Developer", "Doniyor Ro'ziqulov"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  const mystyle = {
    backgroundImage: `url(${heroimg})`,
  };

  const sentence = "Doniyor".split("");

  return (
    <section
      style={mystyle}
      className="h-[500px] min-[780px]:h-[600px] relative lg:h-[730px] min-[780px]:bg-[length:400px_400px] bg-[length:300px_300px] bg-[#000d] 2xl:bg-[#000] lg:bg-[length:600px_600px] bg-no-repeat bg-right bg-black"
    >
      <button
        className="absolute top-5 right-5 z-50 lg:hidden"
        onClick={() => setDisplay(true)}
      >
        <GiHamburgerMenu className="text-white text-2xl" />
      </button>
      <div className="container relative mx-auto flex flex-col items-center justify-center h-full text-center">
        <div className="text-white flex flex-col items-start">
          <p className="font-mono text-2xl">The Portfolio of </p>
          <div className="text-7xl min-[780px]:text-8xl lg:text-9xl font-semibold">
            {sentence.map((letter, inx) => (
              <TextSpan key={inx}>{letter}</TextSpan>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start gap-x-2 absolute top-8 left-8 lg:top-20 lg:left-20">
          <p className="text-2xl font-bold text-white text-shadow">I'm a</p>
          <div className="text-2xl lg:text-3xl font-bold text-white text-shadow">
            {text}
            <Cursor cursorColor="red" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
