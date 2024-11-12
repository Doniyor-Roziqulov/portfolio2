import { lazy, LazyExoticComponent } from "react";
import { useRoutes } from "react-router-dom";
import { SuspenseComponent as Suspense } from "../utils";
import Contact from "../pages/contact/Contact";

const Home: LazyExoticComponent<any> = lazy(() => import("../pages/home/Home"));

const About: LazyExoticComponent<any> = lazy(
  () => import("../pages/about/About")
);

const Layout: LazyExoticComponent<any> = lazy(
  () => import("../pages/layout/Layout")
);

const Routers = () => {
  return useRoutes([
    {
      path: "/",
      element: (
        <Suspense>
          <Layout />
        </Suspense>
      ),
      children: [
        {
          path: "/",
          element: (
            <Suspense>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/about",
          element: (
            <Suspense>
              <About />
            </Suspense>
          ),
        },
        {
          path: "/contact",
          element: (
            <Suspense>
              <Contact />
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
