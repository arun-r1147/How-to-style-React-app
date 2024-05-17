import { FC, useState } from "react";
import { styled } from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  $invalid: boolean;
}
interface LabelProps {
  $invalid: boolean;
}
const LoginContainer = styled.section`
  width: 100%;
  max-width: 28rem;
  padding: 2rem;
  margin: 0 auto;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  background: linear-gradient(180deg, #474232 0%, #28271c 100%);
  color: white;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;
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
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const Login: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleEmailChange = (emailData: string) => {
    setEmail(emailData);
  };

  const handlePasswordChange = (passwordData: string) => {
    setPassword(passwordData);
  };

  const handleSubmission = () => {
    setSubmit(true);
    console.log(email, password);
  };

  const isEmailValid = submit && !email.includes("@");
  const isPaswordValid = submit && password.trim().length < 8;
  return (
    <LoginContainer>
      <InputContainer>
        <Label
          $invalid={isEmailValid}
          htmlFor="email"
          className={isEmailValid ? "invalid" : ""}
        >
          Email
        </Label>
        <Input
          id="email"
          name="Email"
          type="text"
          value={email}
          placeholder="example@gmail.com"
          $invalid={isEmailValid}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleEmailChange(e.target.value)
          }
        />
      </InputContainer>
      <InputContainer>
        <Label
          $invalid={isPaswordValid}
          htmlFor="password"
          className={isPaswordValid ? "invalid" : ""}
        >
          Password
        </Label>
        <Input
          id="password"
          name="Password"
          type="text"
          placeholder="password"
          value={password}
          $invalid={isPaswordValid}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handlePasswordChange(e.target.value)
          }
        />
      </InputContainer>

      <ButtonContainer>
        <button className="text-button">Create a new account?</button>
        <button
          disabled={isEmailValid || isPaswordValid}
          className="button"
          onClick={handleSubmission}
        >
          SignIn
        </button>
      </ButtonContainer>
    </LoginContainer>
  );
};
