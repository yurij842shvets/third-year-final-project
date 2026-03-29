import "./SignupForm.css";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { signup } from "../../../redux/slice/authSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignupForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const error = useAppSelector((state) => state.auth.error);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignup = () => {
    dispatch(signup({ name, email, password }));
    navigate("/main");
  };

  return (
    <>
      <form action="" className="signup-form">
        <h2>Реєстрація</h2>

        <label className="signup-form-label" htmlFor="">
          Ім'я:
        </label>
        <input
          className="signup-form-input"
          type="text"
          placeholder="your username"
          onChange={(e) => setName(e.target.value)}
        />
        <label className="signup-form-label" htmlFor="">
          Електронна пошта:
        </label>
        <input
          className="signup-form-input"
          type="text"
          placeholder="your@email.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="signup-form-label" htmlFor="">
          Пароль:
        </label>
        <input
          className="signup-form-input"
          type="text"
          placeholder="your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <button className="signup-form-signup-button" onClick={handleSignup}>
            Реєстрація{" "}
          </button>
        </div>
      </form>

      {error && <p>{error}</p>}
    </>
  );
}
