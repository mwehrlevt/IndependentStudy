import Map from "./Map"
import {useState, useEffect} from 'react'

function MapApp() {
    const [eventData, setEventData] = useState([])
    const [loading, setLoading] = useState(false)

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
            <h1>Map!!!</h1>
            <Map />
        </div>
    );
}

export default MapApp;