import React from "react";

interface PageContainerProps {
  children: React.ReactNode;
}
const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <div className="w-full p-10 flex justify-center">
      {/* <div className="max-w-screen-2xl"> */}
      {children}
      {/* </div> */}
    </div>
  );
};

export default PageContainer;
