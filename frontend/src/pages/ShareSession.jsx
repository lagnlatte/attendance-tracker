import Navbar from "../components/navbar/NavBar";
import styles from "../styles/ShareSession.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";
import QRCodeBox from "../components/QRCodeBox";

function ShareSession() {
  const { sessionId } = useParams();
  const [code, setCode] = useState("");

  useEffect(() => {
    (async () => {
      const res = await api.get(`/sessions/${sessionId}/share`);
      setCode(res.data.accessCode);
    })();
  }, [sessionId]);

  return (
    <div className={styles.content}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>Share session</h1>
          <p className="grey-text">
            Let participants confirm their attendance using event code or QR
            code
          </p>
        </div>

        <div className={styles.details}>
          <p className={styles.eventCode}>{code || "------"}</p>
          <div className={styles.qrCode}>
            <QRCodeBox text={code} size={220} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareSession;
