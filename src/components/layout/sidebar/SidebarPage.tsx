"use client";

import React, { Fragment } from "react";
import {
  Sidebar as BaseSidebar,
  Menu,
} from "react-pro-sidebar";
import getMenus from "./menus";
import SidebarMenuItem from "./SidebarMenuItem";
import { useSidebarContext } from "@/app/(auth)/ProSidebarLayout";
import "./sidebar.css";

const SidebarPage: React.FC = () => {
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <div className="h-screen">
      <BaseSidebar
        toggled={collapsed}
        breakPoint="md"
        collapsed={collapsed}
        onBackdropClick={() => setCollapsed(!collapsed)}
        width="256px"
        style={{
          borderRight: "1px solid #1f2937",
          height: "100vh",
          backgroundColor: "#111827", 
        }}
      >
        <div className="flex flex-col h-full py-4">
          <Menu
            className="gap-2 px-2"
            menuItemStyles={{
              icon: ({ active }) => ({
                color: active ? "#22c55e" : "#9ca3af", // green-500 : gray-400
                fontSize: "1.3rem",
              }),
              label: ({ active }) => ({
                fontSize: ".9rem",
                color: active ? "#ffffff" : "#d1d5db", // white : gray-300
                fontWeight: active ? "600" : "400",
              }),
              button: ({ active }) => ({
                backgroundColor: active ? "#1f2937" : "transparent", // Tailwind gray-800
                color: active ? "#22c55e" : "#d1d5db",
                borderRadius: "0.5rem",
                padding: "10px 12px",
                margin: "4px 0",
                transition: "all 0.2s ease-in-out",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }),
            }}
          >
            {getMenus().map((menu) => (
              <Fragment key={menu.key}>
                {menu.canAccess && <SidebarMenuItem menu={menu} />}
              </Fragment>
            ))}
          </Menu>
        </div>
      </BaseSidebar>
    </div>
  );
};

export default SidebarPage;
