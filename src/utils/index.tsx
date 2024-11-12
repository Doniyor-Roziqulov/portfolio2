import { Suspense } from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="loader">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
};

const SuspenseComponent = ({ children }: { children: JSX.Element }) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

export { Loading, SuspenseComponent };
