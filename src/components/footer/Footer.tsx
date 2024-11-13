import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pb-10 lg:pb-20 pt-28 lg:pt-[250px] bg-[#1d2b3a] relative border-t">
      <p className="text-[80px] lg:text-[200px] text-skills z-10 text-slate-800 font-semibold absolute top-[-30px] lg:top-[-60px] pointer-events-none lg:left-[70px]">
        The End
      </p>
      <div className="mx-auto container z-30">
        <div className="flex flex-col items-center gap-y-20">
          <p className="text-4xl lg:text-6xl text-neutral-400 z-30">
            FOLLOW ME
          </p>
          <div className="grid grid-cols-4 gap-x-10 h-[100px]">
            <a
              className="hover:relative hover:bottom-3 mb-3 footer__link hover:scale-110 bottom-0"
              target="_blank"
              href="https://t.me/Doniyor_Roziqulov"
            >
              <FaTelegram className="text-white text-4xl" />
            </a>
            <a
              className="hover:relative hover:bottom-3 mb-3 footer__link hover:scale-110 bottom-0"
              target="_blank"
              href="https://www.instagram.com/roziqulov_doniyor"
            >
              <FaInstagram className="text-white text-4xl" />
            </a>
            <a
              className="hover:relative hover:bottom-3 mb-3 footer__link hover:scale-110 bottom-0"
              target="_blank"
              href="https://github.com/Doniyor-Roziqulov"
            >
              <FaGithub className="text-white text-4xl" />
            </a>
            <a
              className="hover:relative hover:bottom-3 mb-3 footer__link hover:scale-110 bottom-0"
              target="_blank"
              href="https://www.linkedin.com/in/doniyor-ro-ziqulov-2a2b93314/?locale=en_US"
            >
              <FaLinkedin className="text-white text-4xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
