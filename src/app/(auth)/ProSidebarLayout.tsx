import SidebarPage from "@/components/layout/sidebar/SidebarPage";
import React, { useState, createContext, useContext } from "react";
const SidebarContext = createContext({});

// for sidebar wrap create a context to handle sidebar state
export const MyProSidebarProvider = ({ children }: any) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <SidebarContext.Provider
      value={{
        setCollapsed,
        collapsed,
      }}
    >
      <div className="h-screen flex bg-black">
        <SidebarPage />
        {children}
      </div>
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => useContext<any>(SidebarContext);
