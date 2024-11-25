import { FaLocationDot } from "react-icons/fa6"

function Place(props) {
    return(
        <>
            <div id="main">
                <img src={props.item.image} id="place-img" alt="" />
                <div id="info">
                    <FaLocationDot id="marker" />&nbsp;
                    <span>{props.item.country}</span>
                    <a href={props.item.gMap} id="map-link">View on Google Maps</a>
                    <h1 id="location">{props.item.location}</h1>
                    <div id="dates">{props.item.dates}</div>
                    <div id="description">{props.item.description}</div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Place