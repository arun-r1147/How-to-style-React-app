import { FC } from "react";

export const Login: FC = () => {
  return (
    <section>
      <div id="auth-inputs">
        <div className="controls">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="Email"
            type="text"
            placeholder="example@gmail.com"
          />
        </div>
        <div className="controls">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="Password"
            type="text"
            placeholder="password"
          />
        </div>

        <div className="actions">
          <button className="text-button">Create a new account?</button>
          <button className="button">SignIn</button>
        </div>
      </div>
    </section>
  );
};
