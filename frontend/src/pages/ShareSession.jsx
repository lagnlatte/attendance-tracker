import Navbar from "../components/navbar/NavBar"
import "../styles/ShareSession.css"

function ShareSession() {
    return (
        <div className="share-session">
            <Navbar />
            <div id="share-content">
                <div id="headline">
                        <h1>Share session</h1>
                        <p className="grey-text">Let participants confirm their attendance using event code or QR code</p>
                    </div>
                    <div id="event-details">
                        <p id="event-code">022884</p>
                        <div id="qr-code"></div>
                    </div>
            </div>
        </div>
    )
}

export default ShareSession