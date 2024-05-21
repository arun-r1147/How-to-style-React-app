import { styled } from "styled-components";
import { FC } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  $invalid: boolean;
}
interface LabelProps {
  $invalid: boolean;
}
interface CustomInputProps {
  label: string;
  invalid: boolean;
  id: string;
  type: string;
  name: string;
  placeholder: string;
  value:string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Label = styled.label<LabelProps>`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ $invalid }) => ($invalid ? "#f87171" : "#6b7280")};
  text-align: left;
`;

const Input = styled.input<InputProps>`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color: ${({ $invalid }) => ($invalid ? "#fed2d2" : "#d1d5db")};
  color: ${({ $invalid }) => ($invalid ? "#f87171" : "#374151")};
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  outline: none;
  border: 1px solid ${({ $invalid }) => ($invalid ? "#f87171" : "transparent")};
`;

export const CustomInput: FC<CustomInputProps> = ({
  label,
  invalid,
  ...inputProps
}) => {
  return (
    <>
      <Label $invalid={invalid}>{label}</Label>
      <Input $invalid={invalid} {...inputProps} />
    </>
  );
};
