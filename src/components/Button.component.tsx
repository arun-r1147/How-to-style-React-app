import { FC, ReactNode } from "react";
interface ButtonProps {
  children: ReactNode;
  onClickSubmission: () => void;
  isDisabled: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  onClickSubmission,
  isDisabled,
}) => {
  let buttonClass =
    "bg-amber-400 cursor-pointer backdrop-blur-0 leading-tight px-8 py-4 font-semibold uppercase rounded text-stone-800 focus:outline-none hover:bg-amber-500 ";
  if (isDisabled) {
    buttonClass += " cursor-not-allowed";
  } else {
    buttonClass += " cursor-pointer";
  }
  return (
    <>
      <button className={buttonClass} onClick={onClickSubmission}>
        {children}
      </button>
    </>
  );
};
