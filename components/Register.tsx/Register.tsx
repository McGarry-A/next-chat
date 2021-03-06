import { FormEvent, ReactNode, SetStateAction, useState } from "react";
import { signIn, signOut } from "next-auth/react";
import Google from "next-auth/providers/google";

interface WrapperProps {
  children: ReactNode;
}

interface ComponentProps {
  login?: boolean;
}

const Register: React.FC<ComponentProps> = ({ login = true }) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  // const handleRegister = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   signIn("google");
  //   // compare passwords
  //   // create a user
  //   // add user to state
  // };
  // const handleLogin = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   signIn("google");
  //   // add user to state
  // };

  const renderWelcomeMessage = () => {
    if (isLogin) {
      return (
        <div className="my-6">
          <h2 className="text-center">Welcome back to CHAT2ME</h2>
          <p className="text-sm">Enter your details below to login</p>
        </div>
      );
    }

    return (
      <div className="my-6">
        <h2 className="text-center my-4">Welcome to CHAT2ME</h2>
        <p className="text-sm">Enter your details below to register</p>
      </div>
    );
  };

  const renderSwitchLogin = () => {
    if (isLogin) {
      return (
        <p className="text-xs text-center mt-4">
          Dont have an account?{" "}
          <span className="text-red-900 hover:cursor-pointer underline font-semibold">
            Click Here
          </span>{" "}
          to register
        </p>
      );
    }

    return (
      <p className="text-xs text-center mt-4">
        Already have an account?{" "}
        <span className="text-red-900 hover:cursor-pointer underline font-semibold">
          Click here
        </span>{" "}
        to login
      </p>
    );
  };

  const renderSubmitButton = (label = "Sign In") => (
    <button className="btn-primary w-full my-2" onClick={() => signIn()}>
      {label}
    </button>
  );

  const renderUsernameField = () => (
    <div className="my-2">
      <label>Username</label>
      <input type="text" onChange={(e) => setUsername(e.target.value)} />
    </div>
  );

  const renderPasswordField = (
    label: string = "Password",
    setState: (value: SetStateAction<string>) => void = setPassword
  ) => (
    <div className="my-2">
      <label>{label}</label>
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
    </div>
  );

  const renderForm = () => {
    if (isLogin) {
      return (
        <form className="">
          {renderUsernameField()}
          {renderPasswordField()}
          {renderSwitchLogin()}
          {renderSubmitButton()}
        </form>
      );
    }
    return (
      <form>
        {renderUsernameField()}
        {renderPasswordField()}
        {renderPasswordField("Confirm Password", setConfirmPassword)}
        {renderSwitchLogin()}
        {renderSubmitButton("Register")}
      </form>
    );
  };

  const LoginWrapper: React.FC<WrapperProps> = ({ children }) => {
    return (
      <div className="max-w-sm w-full border p-4 shadow-sm">{children}</div>
    );
  };

  return (
    <div>
      <LoginWrapper>
        {renderWelcomeMessage()}
        {renderForm()}
      </LoginWrapper>
    </div>
  );
};

export default Register;
