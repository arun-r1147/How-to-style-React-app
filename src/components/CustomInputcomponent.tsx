import { FC } from "react";

interface CustomInputProps {
  label: string;
  invalid: boolean;
  id: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CustomInput: FC<CustomInputProps> = ({
  label,
  invalid,
  ...inputProps
}) => {
  let labelClass =
    "block mb-2 text-xs font-bold tracking-wide uppercase outline-none";
  if (invalid) {
    labelClass += " text-red-600";
  } else {
    labelClass += " text-stone-300";
  }
  let inputClass =
    "w-full px-3 py-2 leading-tight border rounded shadow bg-stone-200 outline-none text-gray-800";
  if (invalid) {
    inputClass += " bg-red-300 border-red-600 ";
  } else {
    inputClass += " bg-stone-300 border-gray-600";
  }
  return (
    <>
      <label className={labelClass}>{label}</label>
      <input className={inputClass} {...inputProps} />
    </>
  );
};
