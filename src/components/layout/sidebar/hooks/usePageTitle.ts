"use client";

import { usePathname } from "next/navigation";
import { trimChar } from "@/utils/StringUtils";
import getMenus, { MenuType } from "@/components/layout/sidebar/menus";

function getTitleForNonMenuPages(pathname: string) {
  const isActivePath = (path: string) => {
    return pathname.includes(path);
  };

  return isActivePath("profile") ? "Profile" : "Admin Panel";
}

export function usePageTitle() {
  const pathname = usePathname();

  const isActive = (m: MenuType) => pathname.includes(trimChar(m.baseUrl, "/"));
  const getTitle = (m: MenuType) => m.pageTitle ?? m.label;

  const menu = getMenus().find(isActive);

  if (menu == undefined) return getTitleForNonMenuPages(pathname);
  if (menu.subMenus == undefined) return getTitle(menu);

  const submenu = menu.subMenus.find(isActive);
  if (submenu == undefined) return getTitle(menu);
  return getTitle(submenu);
}
