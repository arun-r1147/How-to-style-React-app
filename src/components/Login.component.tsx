import { FC, useState } from "react";
import { styled } from "styled-components";
import { CustomInput } from "./CustomInputcomponent";
import { Button } from "./Button.component";

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
    console.log("form",email, password);
  };

  const isEmailValid = submit && !email.includes("@");
  const isPaswordValid = submit && password.trim().length < 8;
  return (
    <LoginContainer>
      <InputContainer>
        <CustomInput
          id="email"
          name="Email"
          type="text"
          label="Email"
          value={email}
          placeholder="example@gmail.com"
          invalid={isEmailValid}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleEmailChange(e.target.value)
          }
        />
      </InputContainer>
      <InputContainer>
        <CustomInput
          id="password"
          name="Password"
          type="text"
          label="Password"
          placeholder="password"
          value={password}
          invalid={isPaswordValid}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handlePasswordChange(e.target.value)
          }
        />
      </InputContainer>

      <ButtonContainer>
        <button className="text-button">Create a new account?</button>
        <Button
          isDisabled={isPaswordValid || isEmailValid}
          onClickSubmission={handleSubmission}
        >
          SignIn
        </Button>
      </ButtonContainer>
    </LoginContainer>
  );
};
