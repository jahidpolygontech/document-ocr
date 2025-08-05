"use client";

import React, { Fragment } from "react";
import { Sidebar as BaseSidebar, Menu, MenuItem } from "react-pro-sidebar";
import getMenus from "./menus";
import SidebarMenuItem from "./SidebarMenuItem";
import { useSidebarContext } from "@/app/(auth)/ProSidebarLayout";
import Image from "next/image";
import './sidebar.css';

const SidebarPage: React.FC = () => {
  const { collapsed, setCollapsed } = useSidebarContext();
  return (
    <div>
      <BaseSidebar
        toggled={collapsed}
        breakPoint="md"
        collapsed={collapsed}
        onBackdropClick={() => setCollapsed(!collapsed)}
        className="overflow-y-hidden"
        width={"256px"}
        style={{ borderRightWidth: 0, height: "100vh"}}
      >
        <div className="md:px-12 px-4 mb-4">
          <Image
            className="mt-4"
            src="/logoz.png"
            alt="logo"
            width={150}
            height={100}
          />
        </div>
        <div className="flex flex-col justify-between ">
          <Menu
            className="gap-4 "
            menuItemStyles={{
              icon: ({ active }) => ({
                color: active ? "#008000" : "#ffffff",
                fontSize: "1.4rem",
              }),
              label: ({ active }) => ({
                fontSize: ".9rem",
                color: active ? "#008000" : "#ffffff",
                fontWeight: active ? "600" : "400",
              }),
              button: ({ active }) => ({
                backgroundColor: active ? "#008000" : "#008000",
                color: "#008000",
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
