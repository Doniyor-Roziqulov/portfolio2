import { useEffect } from "react";
import "./App.css";
import Routers from "./router";
import "aos/dist/aos.css";
// @ts-ignore
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Routers />
    </>
  );
}

export default App;
