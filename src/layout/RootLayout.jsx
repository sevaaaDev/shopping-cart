import { Outlet } from "react-router-dom";
import { NavBar } from "../component/NavBar";
import s from "./layout.module.css";

function RootLayout() {
  return (
    <div className={s.container}>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default RootLayout;
