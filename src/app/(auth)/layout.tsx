"use client";

import NextTopLoader from "nextjs-toploader";
import { isUserNotLogged } from "@/services/LoggedUserClient";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { MyProSidebarProvider } from "./ProSidebarLayout";
import Navbar from "@/components/navbar/Navbar";



interface LoginLayoutProps {
  children: React.ReactNode;
}

const LoginLayout: React.FC<LoginLayoutProps> = (props) => {
  const router = useRouter();

  useEffect(() => {
    // if (isUserNotLogged()) {
    //   router.replace("/login");
    //   return;ProSidebarProvider
    // }
  }, [isUserNotLogged]);

  return (
    <MyProSidebarProvider >
      <div className="flex flex-col w-full bg-black">
        <div className="sticky top-0 z-10">
          <NextTopLoader color="#4169E1" showSpinner={false} />
          <Navbar/>
        </div>
        <div className="h-full w-full bg-white  overflow-y-auto">
          {props.children}
        </div>
      </div>
    </MyProSidebarProvider>
  );
};

export default LoginLayout;