"use client";

import React, {useState } from "react";
import {
  RiLogoutCircleRLine,
  RiMenu5Fill,
} from "react-icons/ri";
import { FaCaretDown } from "react-icons/fa";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import ClickOutsideDropdown from "../ClickOutsideDropdown";
import { logout } from "./actions/LogoutActions";
import {  User } from "@heroui/react";
import styles from "./App.module.css";
import { useSidebarContext } from "@/app/(auth)/ProSidebarLayout";
import { usePageTitle } from "../layout/sidebar/hooks/usePageTitle";

const Navbar = () => {
  const { collapsed, setCollapsed } = useSidebarContext();
  const pageTitle = usePageTitle();
  const profileItem =
    "flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100";
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { push } = useRouter();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogoutClick = async () => {
    await logout();
    toast.success("Logout successful");
    push("/login");
  };

  return (
    <div className="flex justify-between items-center h-[70px] w-full px-2 border bg-white ">
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="bg-white md:hidden"
      >
        <RiMenu5Fill className="w-5 h-5" />
      </button>

      <div className="flex">
        <span className="text-gray-600 md:text-xl text-nowrap text-sm font-bold md:p-7">
        {pageTitle}
        </span>
      </div>

      <div className="flex justify-end items-center gap-6">
        <div className="flex gap-4 items-center">
          <div>
            <p className="flex justify-end md:text-xl text-sm font-bold text-gray-600">
              John Doe
            </p>
          </div>

          <ClickOutsideDropdown
            trigger={
              <div
                onClick={toggleDropdown}
                className="flex justify-center items-center text-xl hover:text-gray-600 transition-colors duration-200"
              >
                <User
                  name=""
                  description=""
                  avatarProps={{
                    src: "",
                    className: styles.avatarImage,
                  }}
                  className="!gap-0"
                />
                <FaCaretDown />
              </div>
            }
            className="dropdown-wrapper"
          >
            <div className="absolute right-0 mt-2 w-60 bg-white shadow-lg rounded-md p-2 transition-opacity duration-300 ease-in-out">
         
              <button onClick={handleLogoutClick} className={profileItem}>
                <RiLogoutCircleRLine /> Logout
              </button>
            </div>
          </ClickOutsideDropdown>
        </div>
      </div>
    </div>
  );
};

export default Navbar;