import "../../styles/AttendanceSmallCard.css"

function SmallCard({ Icon, title, text }) {
    return (
        <div className="small-card">
            <Icon />
            <div className="card-content">
                <p className="card-title">{title}</p>
                <p className="card-text">{text}</p>
            </div>
        </div>
    )
}

export default SmallCard