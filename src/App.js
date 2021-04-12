import Header from './components/Header'
import Map from './components/Map'
import {useState, useEffect} from 'react'


function App() {
    const [eventData, setEventData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchEvents = async () => {
            setLoading(true)
            // this is just a placeholder for now
            const res = await fetch('https://maps.googleapis.com/maps/api/place/findplacefromtext/output?parameters')
            const { events } = await res.json()

            setEventData(events)
            setLoading(false)
        }
        fetchEvents()
    }, [])

  return (
    <div>
          <Header />
          {!loading ? <Map eventData={eventData} /> : <h1> Searching...</h1>}
    </div>
  );
}

export default App;
