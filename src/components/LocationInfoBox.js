const LocationInfoBox = ({ info }) => {
    return (
        <div>
            <h2>Event Location Info</h2>
            <ul>
                <li>NAME: <strong>{info.name}</strong></li>
                <li>HOURS: <strong>{info.hours}</strong></li>
            </ul>
        </div>

    )
}


export default LocationInfoBox
