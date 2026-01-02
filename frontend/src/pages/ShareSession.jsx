import Navbar from "../components/navbar/NavBar"
import styles from "../styles/ShareSession.module.css"

function ShareSession() {
    return (
        <div className={styles.content}>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.heading}>
                    <h1>Share session</h1>
                    <p className="grey-text">Let participants confirm their attendance using event code or QR code</p>
                </div>
                <div className={styles.details}>
                    <p className={styles.eventCode}>022884</p>
                    <div className={styles.qrCode}></div>
                </div>
            </div>
        </div>
    )
}

export default ShareSession