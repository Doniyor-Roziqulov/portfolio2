import { NavLink } from "react-router-dom";
import logo from "../../images/web_dev_network-512.webp";
import { RiCloseLargeLine, RiContactsLine, RiHomeLine } from "react-icons/ri";
import { FiAlertCircle } from "react-icons/fi";

interface HeaderProps {
  display: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ display, setDisplay }) => {
  return display === false ? (
    <></>
  ) : (
    <header className="relative z-[60] lg:hidden">
      <div className="w-[200px] pt-6 fixed top-0 right-0 z-10 h-full bg-black border-l">
        <button className="lg:hidden" onClick={() => setDisplay(false)}>
          <RiCloseLargeLine className="text-white absolute text-2xl top-5 right-5" />
        </button>
        <div className="flex justify-center">
          <NavLink onClick={() => setDisplay(false)} to={"/"}>
            <img
              className="bg-white rounded-full w-[90px] rotating-image"
              src={logo}
              alt="logo"
            />
          </NavLink>
        </div>
        <ul className="flex flex-col px-8  gap-y-5 mt-14 header__list">
          <li>
            <NavLink
              onClick={() => setDisplay(false)}
              className="text-gray-400 lissss text-2xl border-y border-black flex py-1 items-center font-semibold transition-all gap-x-2 hover:text-gray-700"
              to={"/"}
            >
              <RiHomeLine />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setDisplay(false)}
              className="text-gray-400 text-2xl border-y border-black flex py-1 items-center font-semibold transition-all gap-x-2 hover:text-gray-700"
              to={"/about"}
            >
              <FiAlertCircle /> About
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setDisplay(false)}
              className="text-gray-400 text-2xl border-y border-black flex py-1 items-center font-semibold transition-all gap-x-2 hover:text-gray-700"
              to={"/contact"}
            >
              <RiContactsLine /> Contact
            </NavLink>
          </li>
        </ul>
        <p className="text-gray-300 text-center relative top-[350px]">
          doniyor.uz
        </p>
      </div>
    </header>
  );
};

export default Header;
