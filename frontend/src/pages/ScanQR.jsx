import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/NavBar";
import { Html5QrcodeScanner } from "html5-qrcode";

function ScanQR() {
  const navigate = useNavigate();

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "qr-reader",
      { fps: 10, qrbox: 250 },
      false
    );

    scanner.render(
      (decodedText) => {
        // stop scanner and go to confirm with the code
        scanner.clear().then(() => {
          navigate("/confirm", { state: { code: decodedText } });
        });
      },
      () => {
        // ignore scan errors
      }
    );

    return () => {
      scanner.clear().catch(() => {});
    };
  }, [navigate]);

  return (
    <div style={{ padding: 16 }}>
      <Navbar />
      <h1 style={{ marginTop: 20 }}>Scan QR code</h1>
      <p className="grey-text">Point your camera at the QR code shown.</p>

      <div id="qr-reader" style={{ marginTop: 16 }} />
    </div>
  );
}

export default ScanQR;
