import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import InputField from "../components/InputField";
import Button from "../components/Button";
import styles from "../styles/Home.module.css";
import QRText from "../components/QRText";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();
  const [code, setCode] = useState("");

  return (
    <div className={styles.content}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>Confirm attendance</h1>
          <QRText />
        </div>

        <div className={styles.inputs}>
          <form
            className={styles.inputs}
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/confirm", { state: { code } });
            }}
          >
            <InputField
              label="Event Code"
              type="text"
              placeholder="022884"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <Button text="Confirm" />
          </form>

          <Button
            showOnMobile={true}
            text="Scan QR code"
            onClick={() => navigate("/scan")}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
