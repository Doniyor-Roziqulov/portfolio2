import { lazy, LazyExoticComponent, useState } from "react";
import { useRoutes } from "react-router-dom";
import { SuspenseComponent as Suspense } from "../utils";

interface DisplayProps {
  display: boolean;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home: LazyExoticComponent<React.FC<DisplayProps>> = lazy(
  () => import("../pages/home/Home")
);

const Contact: LazyExoticComponent<React.FC<DisplayProps>> = lazy(
  () => import("../pages/contact/Contact")
);

const About: LazyExoticComponent<React.FC<DisplayProps>> = lazy(
  () => import("../pages/about/About")
);

const Layout: LazyExoticComponent<React.FC<DisplayProps>> = lazy(
  () => import("../pages/layout/Layout")
);

const Routers = () => {
  const [display, setDisplay] = useState(false);

  return useRoutes([
    {
      path: "/",
      element: (
        <Suspense>
          <Layout display={display} setDisplay={setDisplay} />
        </Suspense>
      ),
      children: [
        {
          path: "/",
          element: (
            <Suspense>
              <Home display={display} setDisplay={setDisplay} />
            </Suspense>
          ),
        },
        {
          path: "/about",
          element: (
            <Suspense>
              <About display={display} setDisplay={setDisplay} />
            </Suspense>
          ),
        },
        {
          path: "/contact",
          element: (
            <Suspense>
              <Contact display={display} setDisplay={setDisplay} />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "*",
      element: (
        <Suspense>
          <h2>404</h2>
        </Suspense>
      ),
    },
  ]);
};

export default Routers;
