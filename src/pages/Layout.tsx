import React from "react";
import HeaderContainer from "../features/header/headerContainer";
import BottomNavViewContainer from "../features/bottomNav/bottomNavContainer";
import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <HeaderContainer />
      <main className="flex-grow overflow-auto pb-16">
        <Outlet />
      </main>
      <BottomNavViewContainer />
    </div>
  );
};
