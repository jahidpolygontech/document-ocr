import React from "react";
import Image from "next/image";
import Footer from "@/components/footer/Footer";

interface LoginLayoutProps {
  children: React.ReactNode;
}

const LoginLayout: React.FC<LoginLayoutProps> = (props) => {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className=" bg-gray-100 flex flex-row-reverse justify-center items-center w-full  rounded-2xl">
          <div className="rounded bg-no-repeat bg-cover flex items-center justify-center">
            {props.children}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginLayout;
