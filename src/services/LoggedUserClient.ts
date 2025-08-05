"use client";

import { getCookie } from "cookies-next/client";
import { LoggedUserCookieStoreKey } from "./Consts";
import { User, UserOrNull } from "@/types/User";


export function getLoggedUser():UserOrNull {
  
  const cookie = getCookie(LoggedUserCookieStoreKey);

  if (!cookie) {
    return null; 
  }

  try {
    return JSON.parse(cookie as string) as User;
  } catch (error) {
    console.error("Failed to parse logged user cookie:", error);
    return null;
  }
}


export function isUserNotLogged() {
  return getCookie(LoggedUserCookieStoreKey) == undefined;
}


