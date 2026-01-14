import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/NavBar";
import InputField from "../components/InputField";
import Button from "../components/Button";
import styles from "../styles/Confirm.module.css";
import { useState } from "react";
import api from "../api/api";

function Confirm() {
  const navigate = useNavigate();
  const location = useLocation();
  const code = location.state?.code || "";

  const [err, setErr] = useState("");

  const handleContinue = async () => {
    try {
      setErr("");
      const res = await api.post("/attendance/check-in", { code });
      navigate("/confirmed", {
        state: {
          eventId: res.data.eventId,
          checkInTime: res.data.checkInTime,
          code,
        },
      });
    } catch (e) {
      setErr(e?.response?.data?.error || "Check-in failed");
    }
  };

  return (
    <div className={styles.content}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>Did we get it right?</h1>
        </div>
        <div className={styles.inputs}>
          <InputField
            label="Event Code"
            type="text"
            value={code}
            disabled={true}
          />
          {err && <p className="grey-text">{err}</p>}
          <div className={styles.buttons}>
            <Button text="Continue" onClick={handleContinue} />
            <Button
              color="#FA0D11"
              text="Cancel"
              onClick={() => navigate("/home")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
