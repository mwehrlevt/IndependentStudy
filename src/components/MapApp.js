import Map from "./Map"
import {useState, useEffect} from 'react'

function MapApp() {
    const [eventData, setEventData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchEvents = async () => {
            setLoading(true)
            const res = await fetch('https://maps.googleapis.com/maps/api/place/textsearch/xml?query=restaurants+in+Sydney&key=AIzaSyBejaZOfwWW5yspBtDdfzPAGKIShmNyY8M')
            const {} = await res.json()

            setEventData()
            setLoading(false)
        }

        fetchEvents()

        console.log()
    }, [])

    return (
        <div>
            <h1>Map!!!</h1>
            <Map />
        </div>
    );
}

export default MapApp;