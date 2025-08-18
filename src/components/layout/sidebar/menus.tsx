"use client";

import { ReactNode } from "react";
import { BsUpload, BsFileEarmarkText } from "react-icons/bs";

export interface MenuType {
  key: string;
  baseUrl: string;
  label: string;
  pageTitle?: string;
  icon: ReactNode;
  canAccess: boolean;
  subMenus?: Omit<MenuType, "subMenus">[];
}

export default function getMenus(): MenuType[] {
  return [
    // {
    //   key: "dashboard",
    //   baseUrl: "/dashboard",
    //   label: "Dashboard",
    //   icon: <GoHomeFill />,
    //   canAccess: true,
    // },
    {
      key: "upload",
      baseUrl: "/upload",
      label: "Upload Documents",
      icon: <BsUpload />,
      canAccess: true,
    },
    {
      key: "document",
      baseUrl: "/document",
      label: "Verify Document",
      icon: <BsFileEarmarkText />,
      canAccess: true,
    },

    // {
    //   key: "log",
    //   baseUrl: "/log",
    //   label: "Log",
    //   icon: <BsJournalCheck />,
    //   canAccess: true,
    // },
  ];
}
