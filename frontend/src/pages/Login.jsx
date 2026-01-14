import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";
import RoleTab from "../components/RoleTab";
import styles from "../styles/Login.module.css";
import Logo from "../components/Logo";
import { UserContext } from "../context/UserContext";
import api from "../api/api";

function Login() {
  const navigate = useNavigate();
  const { role, setRole } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const handleLogin = async () => {
    try {
      setErr("");
      const res = await api.post("/auth/login", { email, password });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      setRole(res.data.user.role);
      navigate(res.data.user.role === "host" ? "/dashboard" : "/home");
    } catch (e) {
      setErr(e?.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className={styles.content}>
      <div className={styles.signIn}>
        <div className={styles.headline}>
          <Logo />
          <div className={styles.heading}>
            <h1>Sign in to your account</h1>
            <p className="grey-text">
              Enter your role, email and password to log in
            </p>
          </div>
        </div>

        <div>
          <RoleTab selectedRole={role} onChangeRole={setRole} />
        </div>

        <form
          className={styles.inputs}
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <InputField
            label="Email"
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            label="Password"
            type="password"
            placeholder="******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {err && <p className="grey-text">{err}</p>}
          <Button text="Log in" />
        </form>
      </div>

      <div id="sign-up">
        <p className="grey-text">
          Don't have an account?{" "}
          <Link to="/signup" className="info">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
