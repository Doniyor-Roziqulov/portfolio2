import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main>
      <Header />
      <div className="mr-[200px]">
        <Outlet />
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
