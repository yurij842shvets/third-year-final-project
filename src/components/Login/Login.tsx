import logo from "../../assets/logo.png";
import loginPageIcons from "../../assets/login-page-icons.png";
import LoginForm from "../LoginForm/LoginForm";
import "./Login.css";

export default function Login() {
  return (
    <>
      <div className="logo">
        <img src={logo} alt="logo" />
        <h4>INVESTIQ</h4>
      </div>

      <div className="main-wrapper">
        <div className="main">
          <div className="background-image"></div>
          <div>
              <h1 className="title">InvestIQ</h1>
              <h3 className="secondary-title ">Smart Finance</h3>
              <LoginForm />
          </div>
        </div>
      </div>

      <img
        src={loginPageIcons}
        alt="login-page-icons"
        className="login-page-icons"
      />
    </>
  );
}
