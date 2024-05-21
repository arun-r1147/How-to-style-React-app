import { FC } from "react";
import logo from "/logo.png";

export const Header: FC = () => {
  return (
    <header className="flex flex-col justify-center items-center mt-8 mb-8">
      <img
        className="object-contain mb-8 w-44 h-44 p-3"
        src={logo}
        alt="canvas image"
      />
      <h2 className="text-4xl font-semibold text-center m-0 uppercase text-amber-800 tracking-widest font-title">
        Let's learn React Styling
      </h2>
    </header>
  );
};
