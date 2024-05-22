import "./App.css";

import { FC } from "react";
import { Login } from "./components/Login.component";
import { Header } from "./components/Header.component";

export const App: FC = () => {
  return (
    <>
      <Header />
      <Login />
    </>
  );
};
