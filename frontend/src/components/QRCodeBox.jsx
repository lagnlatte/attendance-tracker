import { useEffect, useState } from "react";
import QRCode from "qrcode";

function QRCodeBox({ text, size = 220 }) {
  const [dataUrl, setDataUrl] = useState("");

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      if (!text) return setDataUrl("");
      const url = await QRCode.toDataURL(text, { width: size, margin: 1 });
      if (!cancelled) setDataUrl(url);
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [text, size]);

  if (!text) return null;

  return <img src={dataUrl} alt="QR code" width={size} height={size} />;
}

export default QRCodeBox;
