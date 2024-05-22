import { FC, useState } from "react";
import { Button } from "./Button.component";
import { CustomInput } from "./CustomInputcomponent";



const InputContainer = ` flex flex-col mb-4`;

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
    console.log("form", email, password);
  };

  const isEmailValid = submit && !email.includes("@");
  const isPaswordValid = submit && password.trim().length < 8;
  return (
    <div className="w-full max-w-sm p-8 mx-auto my-auto rounded-lg text-white shadow-lg bg-gradient-to-b from-stone-700 to-stone-800" >
      <div className={InputContainer}>
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
      </div>
      <div className={InputContainer}>
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
      </div>

      <div className="flex justify-end gap-4 ">
        <button className="text-amber-400 hover:text-amber-500">Create a new account?</button>
        <Button
          isDisabled={isPaswordValid || isEmailValid}
          onClickSubmission={handleSubmission}
        >
          SignIn
        </Button>
      </div>
    </div>
  );
};
