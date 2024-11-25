import { IoIosStar } from "react-icons/io";

function Card(props) {
    let badgeText
    if(props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    }
    else if(props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return(
        <div id="card">
            {badgeText && <div id="badge">{badgeText}</div>}
            <img src={props.item.image} id="card-img" alt="" />
            <div id="stats" className="card-text">
                <IoIosStar id="star" />&nbsp;
                {props.item.stats.rating}&nbsp;
                <span className="grey">
                    ({props.item.stats.reviewCount})•{props.item.location}
                </span>
            </div>
            <div id="title-div" className="card-text">
                {props.item.title}
            </div>
            <div id="price" className="card-text">
                <span className="bold">From ${props.item.price}</span> / person
            </div>
        </div>
    )
}

export default Card