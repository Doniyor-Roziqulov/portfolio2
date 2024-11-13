import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { Outlet } from "react-router-dom";
import Headers from "../../components/headers/Headers";

interface HeaderProps {
  display: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

const Layout: React.FC<HeaderProps> = ({ display, setDisplay }) => {
  return (
    <>
      <main>
        <Header display={display} setDisplay={setDisplay} />
        <Headers />
        <div className="lg:mr-[200px]">
          <Outlet />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Layout;
