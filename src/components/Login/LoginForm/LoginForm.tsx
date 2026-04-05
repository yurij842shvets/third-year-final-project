import googleLogo from "../../../assets/google-logo.png";
import "./LoginForm.css";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { login } from "../.././../redux/slice/authSlice";
import { useNavigate } from "react-router-dom";
import { useState} from "react";
import { useEffect } from "react";

export default function LoginForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { error, currentUser } = useAppSelector((state) => state.auth);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    dispatch(login({ email, password }));
  }

function restrictToSignup() {
    navigate("/signup");
}

useEffect(() => {
  if (currentUser) {
    navigate("/main");
  }
}, [currentUser]);

  return (
    <>
      <form action="" className="login-form" onSubmit={handleLogin}>
        <p>
          Ви можете авторизуватися за допомогою
          <br /> акаунта Google
        </p>
        <button className="login-form-google-button">
          <img src={googleLogo} alt="google-logo" />
          Google{" "}
        </button>
        <p>
          Або увійти за допомогою ел. пошти та
          <br /> паролю після реєстрації
        </p>
        <label className="login-form-label" htmlFor="">
          Електронна пошта:
        </label>
        <input
          className="login-form-input"
          type="email"
          placeholder="your@email.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="login-form-label" htmlFor="">
          Пароль:
        </label>
        <input
          className="login-form-input"
          type="text"
          placeholder="your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <button className="login-form-login-button" type="submit">
            Увійти
          </button>
          <button
            className="login-form-signup-button"
            onClick={restrictToSignup}
            type="button"
          >
            Реєстрація{" "}
          </button>
        </div>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}
