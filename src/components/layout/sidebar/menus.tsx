"use client";

import { ReactNode } from "react";
import { BsJournalCheck, BsUpload } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";


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
    {
      key: "dashboard",
      baseUrl: "/dashboard",
      label: "Dashboard",
      icon: <GoHomeFill />,
      canAccess: true,
    },
    {
      key: "upload",
      baseUrl: "/upload",
      label: "Upload",
      icon: <BsUpload />, 
      canAccess: true,
    },
    {
      key: "log",
      baseUrl: "/log",
      label: "Log",
      icon: <BsJournalCheck />,
      canAccess: true,
    },
   
    
  ];
}

