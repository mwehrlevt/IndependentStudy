import Map from "./Map"
import {useState, useEffect} from 'react'

function MapApp(props) {
    const {checkBoxes, longitudeProp, latitudeProp} = props

    const [eventData, setEventData] = useState([])
    const [loading, setLoading] = useState(false)

    console.log('MapApp: checkBoxes is ' + checkBoxes);
    
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
        { !loading ? <Map checkBoxes={props.checkedNASAProps} eventData={eventData} longitude={longitudeProp} latitude={latitudeProp}/> : <h1>Loading...</h1> }
    </div>
    );
}

export default MapApp;
