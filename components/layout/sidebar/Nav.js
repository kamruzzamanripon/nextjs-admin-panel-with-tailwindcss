import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
  CollectionIcon,
  CubeIcon
} from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";

const Nav = ({ sidebarOutsideClick }) => {
  const [sidebarStatus, setSidebarStatus] = useState(false);
  const [subMenuToggleStatus, setSubMenuToggleStatus] = useState(false);

  const sidebarClose = () => {
    setSidebarStatus(false);
  };

  const sidebarOpen = () => {
    setSidebarStatus(true);
  };

  const subMenuToggle = () => {
    setSubMenuToggleStatus(!subMenuToggleStatus);
  };

  const SubCategorySubMenuArray = ["Sub-Category All", "Sub-Category Edit"];

  useEffect(() => {
    if (sidebarOutsideClick) {
      setSidebarStatus(false);
    }
  }, [sidebarOutsideClick]);
  //console.log("sidebar Nav", sidebarOutsideClick)
  return (
    <>
      <nav className="flex flex-col mx-4 my-6 space-y-4">
        <div className="inline-flex items-center justify-center ">
          {sidebarStatus ? (
            <ArrowNarrowLeftIcon
              className="inline-block h-12 cursor-pointer"
              onClick={sidebarClose}
            />
          ) : (
            <ArrowNarrowRightIcon
              className="inline-block h-12 cursor-pointer"
              onClick={sidebarOpen}
            />
          )}
        </div>

        <NavItem
          sidebarStatus={sidebarStatus}
          menuTitle="Category"
          subMenu={false}
          subMenuArray={null}
        >
          <CollectionIcon className="h-10" />
        </NavItem> 
        <NavItem
          sidebarStatus={sidebarStatus}
          menuTitle="Sub-Category"
          subMenu={true}
          subMenuArray={SubCategorySubMenuArray}
        >
          <CubeIcon className="h-10" />
        </NavItem>
      </nav>
    </>
  );
};

export default Nav;
