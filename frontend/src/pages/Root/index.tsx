import React from "react";
import { Outlet } from "react-router-dom";

export default function Root(): React.ReactNode {
  return (
    <>
      <div className="wrapper">
        <Outlet />
      </div>
    </>
  );
}
