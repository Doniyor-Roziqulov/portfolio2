import { useTypewriter, Cursor } from "react-simple-typewriter";
import heroimg from "../../images/developer-with-ai-generated-free-png.webp";
import TextSpan from "../textspan/TextSpan";

const Hero: React.FC = () => {
  const [text] = useTypewriter({
    words: ["Front-End Developer", "Doniyor Ro'ziqulov"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  const mystyle = {
    backgroundImage: `url(${heroimg})`,
    backgroundSize: "600px 600px",
  };

  const sentence = "Doniyor".split("");

  return (
    <section
      style={mystyle}
      className="h-[730px] bg-no-repeat bg-right bg-cover bg-black"
    >
      <div className="container relative mx-auto flex flex-col items-center justify-center h-full text-center">
        <div className="text-white flex flex-col items-start">
          <p className="font-mono text-2xl">The Portfolio of </p>
          <div className="text-9xl font-semibold">
            {sentence.map((letter, inx) => (
              <TextSpan key={inx}>{letter}</TextSpan>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start gap-x-2 absolute top-20 left-20">
          <p className="text-2xl font-bold text-white text-shadow">I'm a</p>
          <div className="text-3xl font-bold text-white text-shadow">
            {text}
            <Cursor cursorColor="red" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
