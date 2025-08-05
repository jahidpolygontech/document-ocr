"use client";

import { ReactNode } from "react";
import { BsShieldCheck, BsWallet } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import {LiaCarAltSolid, LiaExchangeAltSolid, LiaFileAlt, LiaFileMedicalSolid, LiaHospitalAltSolid, LiaLightbulbSolid, LiaMobileSolid, LiaMoneyBillWaveSolid, LiaPiggyBankSolid, LiaSdCardSolid, LiaTrainSolid } from "react-icons/lia";
import { getLoggedUser } from "@/services/LoggedUserClient";
import { usePathname } from "next/navigation";
import { trimChar } from "@/utils/StringUtils";
import { MdOutlineLandslide } from "react-icons/md";
import { GrDocument } from "react-icons/gr";
import { FaHistory } from "react-icons/fa";
import { RiGovernmentFill } from "react-icons/ri";


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
  const user = getLoggedUser();

  return [
    {
      key: "dashboard",
      baseUrl: "/dashboard",
      label: "Dashboard",
      icon: <GoHomeFill />,
      canAccess: true,
    },
    {
      key: "Banks",
      baseUrl: "/banks",
      label: "Banks",
      icon: <LiaPiggyBankSolid />,
      canAccess: true,
    },
    {
      key: "Wallets",
      baseUrl: "/wallets",
      label: "Wallets",
      icon: <BsWallet />,
      canAccess: true,
    },
    {
      key: "Utilities",
      baseUrl: "/utilities",
      label: "Utilities",
      icon: <LiaLightbulbSolid />,
      canAccess: true,
    },
    {
      key: "Insurance",
      baseUrl: "/insurance",
      label: "Insurance",
      icon: <BsShieldCheck />,
      canAccess: true,
    },
    {
      key: "Travel Services",
      baseUrl: "/travel-services",
      label: "Travel Services",
      icon: <LiaTrainSolid />,
      canAccess: true,
    },
    {
      key: "Medical Services",
      baseUrl: "/medical-services",
      label: "Medical Services",
      icon: <LiaHospitalAltSolid />,
      canAccess: true,
    },
    {
      key: "Government Services",
      baseUrl: "/government-services",
      label: "Government Services",
      icon: <RiGovernmentFill />,
      canAccess: true,
    },
    {
      key: "Social safety net",
      baseUrl: "/social-safety-net",
      label: "Social safety Services",
      icon: <GrDocument />,
      canAccess: true,
    },
    {
      key: "Land services",
      baseUrl: "/land-services",
      label: "Land services",
      icon: <MdOutlineLandslide />,
      canAccess: true,
    },
    {
      key: "MFS",
      baseUrl: "/mfs",
      label: "MFS",
      icon: <LiaMobileSolid />,
      canAccess: true,
    },
    {
      key: "Transaction History",
      baseUrl: "/transactions",
      label: "Transaction History",
      icon: <FaHistory />,
      canAccess: true,
    },
  ];
}

