import Map from "./Map"
import {useState, useEffect} from 'react'

function MapApp(checkBoxes, longitude, latitude) {
    const [eventData, setEventData] = useState([])
    const [loading, setLoading] = useState(false)

    console.log("here")
    console.log(latitude);
    console.log(longitude);

    useEffect(() => {
        const fetchEvents = async () => {
            setLoading(true)
            const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
            const {events} = await res.json()

            setEventData(events)
            setLoading(false)
        }

        fetchEvents()

    }, [])

    return (
        <div>
            <h1>Map of Weather Events</h1>
            { !loading ? <Map checkBoxes={checkBoxes} eventData={eventData} longitude={longitude} latitude={latitude}/> : <h1>Loading...</h1> }
        </div>
    );
}

export default MapApp;
