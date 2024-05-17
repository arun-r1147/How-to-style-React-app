import { FC, useState } from "react";


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
    <section>
      <div id="auth-inputs">
        <div className="controls">
          <label htmlFor="email" className={isEmailValid ? "invalid" : ""}>
            Email
          </label>
          <input
            id="email"
            name="Email"
            type="text"
            value={email}
            placeholder="example@gmail.com"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleEmailChange(e.target.value)
            }
            className={isEmailValid ? "invalid" : ""}
          />
        </div>
        <div className="controls">
          <label htmlFor="password" className={isPaswordValid ? "invalid" : ""}>
            Password
          </label>
          <input
            id="password"
            name="Password"
            type="text"
            placeholder="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handlePasswordChange(e.target.value)
            }
            className={isPaswordValid ? "invalid" : ""}
          />
        </div>

        <div className="actions">
          <button className="text-button">Create a new account?</button>
          <button
            disabled={isEmailValid || isPaswordValid}
            className="button"
            onClick={handleSubmission}
          >
            SignIn
          </button>
        </div>
      </div>
    </section>
  );
};
