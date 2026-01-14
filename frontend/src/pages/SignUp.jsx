import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import api from "../api/api";
import Button from "../components/Button";
import InputField from "../components/InputField";
import RoleTab from "../components/RoleTab";
import BackArrow from "../components/BackArrow";
import styles from "../styles/SignUp.module.css";

function SignUp() {
  const navigate = useNavigate();
  const { role, setRole } = useContext(UserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const handleRegister = async () => {
    try {
      setErr("");
      const res = await api.post("/auth/register", {
        name,
        email,
        password,
        role,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate(res.data.user.role === "host" ? "/dashboard" : "/home");
    } catch (e) {
      setErr(e?.response?.data?.error || "Register failed");
    }
  };

  return (
    <div className={styles.content}>
      <div className={styles.signUp}>
        <div className={styles.headline}>
          <div id="back">
            <BackArrow onClick={() => navigate("/")} />
          </div>
          <div className={styles.heading}>
            <h1>Sign up</h1>
            <p className="grey-text">Create an account to use Attenda</p>
          </div>
        </div>

        <form
          className={styles.inputs}
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister();
          }}
        >
          <InputField
            label="Full Name"
            type="text"
            placeholder="Jinx"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            label="Email"
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            label="Set Password"
            type="password"
            placeholder="******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div id="tabbing">
            <p className="grey-text">Role</p>
            <RoleTab selectedRole={role} onChangeRole={setRole} />
          </div>

          {err && <p className="grey-text">{err}</p>}
          <Button text="Register" />
        </form>
      </div>

      <div id="sign-in">
        <p className="grey-text">
          Already have an account?{" "}
          <Link to="/" className="info">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
