import "../../styles/SmallCard.css"

function SmallCard( {Icon, title, heading, text}) {
    return (
        <div className="small-card">
            <div className="icon-title">
                <Icon />
                <p>{title}</p>
            </div>
            <p className="card-heading">{heading}</p>
            <p className="card-text">{text}</p>
        </div>
    )
}

export default SmallCard