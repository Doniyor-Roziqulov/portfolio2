import {
  FaBootstrap,
  FaCss3,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaSass,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiAntdesign, SiRedux } from "react-icons/si";

import developer from "../../images/dev.png";

const Using = () => {
  return (
    <section className="pt-12 bg-black relative">
      <p className="text-[250px] pointer-events-none text-skills z-10 text-white font-bold absolute pro__text top-[260px] left-[780px]">
        Skill
      </p>
      <div className="mx-auto container px-5 z-30">
        <div className="grid grid-cols-10 relative px-5">
          <FaHtml5
            data-aos="zoom-in"
            title="Html5"
            className="text-7xl rounded-md text-red-500 item1 p-1 relative top-[200px] left-[250px]"
          />
          <FaCss3
            data-aos="zoom-in"
            title="Css3"
            className="text-5xl rounded-md text-blue-500 item2 p-1 relative top-[350px] left-[200px]"
          />
          <FaSass
            data-aos="zoom-in"
            title="Sass"
            className="text-9xl rounded-md text-[#C76395] item3 p-1"
          />
          <FaJs
            data-aos="zoom-in"
            title="JavaScript"
            className="text-6xl rounded-md bg-yellow-500 item4 p-1 relative top-[270px] left-[400px]"
          />
          <FaGitAlt
            data-aos="zoom-in"
            title="Git"
            className="text-8xl rounded-md text-blue-500 item2 p-1"
          />
          <FaFigma
            data-aos="zoom-in"
            title="Figma"
            className="text-5xl rounded-md text-violet-500 item5 p-1"
          />
          <FaGithub
            data-aos="zoom-in"
            title="GitHub"
            className="text-8xl rounded-md text-neutral-600 item6 p-1 relative top-[150px] right-[80px]"
          />
          <FaBootstrap
            data-aos="zoom-in"
            title="Bootstrap"
            className="text-6xl rounded-md text-violet-700 item7 p-1 relative right-28"
          />
          <RiTailwindCssFill
            data-aos="zoom-in"
            title="TailwindCss"
            className="text-7xl rounded-md text-sky-400 item8 p-1 relative top-[200px] right-4"
          />
          <SiAntdesign
            data-aos="zoom-in"
            title="Antdesign"
            className="text-5xl rounded-md text-sky-600 item9 p-1 relative right-[250px] top-32"
          />
          <SiRedux
            data-aos="zoom-in"
            title="Redux"
            className="text-9xl rounded-md text-[#7147B5] item10 p-1 relative left-[400px] top-6"
          />
          <RiNextjsFill
            data-aos="zoom-in"
            title="NextJs"
            className="text-7xl rounded-md text-neutral-600 item11 p-1"
          />
        </div>
        <div className="flex items-center justify-center">
          <img className="w-[500px]" src={developer} alt="Developer image" />
        </div>
      </div>
    </section>
  );
};

export default Using;
