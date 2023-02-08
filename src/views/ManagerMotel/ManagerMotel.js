import React from "react";
import { Route, Router, Routes, Switch } from "react-router-dom";
import SideBar from "./../SideBar/SideBar";
import "./ManagerMotel.scss";
import { routes } from "../../routers/routeSidebar";
export default function ManagerMotel() {
  const mapRouterSidebar = () => {
    return routes.map((route, index) => {
      return <Route key={index} path={route.path} element={route.main} />;
    });
  };

  return (
    <div className="page">
      <div className="page__sidebar">
        <SideBar />
      </div>
      <div className="page__container">
        <Routes>{mapRouterSidebar()}</Routes>
      </div>
    </div>
  );
}
