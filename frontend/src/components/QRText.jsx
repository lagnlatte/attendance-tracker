import { useState, useEffect } from 'react'

function QRText() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 650);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 650);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    return (
        <p className="grey-text">
            {isMobile ? "Scan the QR code provided by host or enter the event code below" : "Enter the event code below" }
        </p>
    )
}

export default QRText