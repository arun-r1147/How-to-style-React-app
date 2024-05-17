import { FC } from "react";
import logo from "../../public/logo.png";

export const Header: FC = () => {
  return (
    <header>
      <img src={logo} alt="canvas image" />
      <h2>Let's learn React Styling</h2>
    </header>
  );
};
