import Header from './components/Header'
import Map from './components/Map'
import {useState, useEffect} from 'react'


function App() {
   // const [eventData, setEventData] = useState([])
   // const [loading, setLoading] = useState(false)

   /* useEffect(() => {
        const fetchEvents = async () => {
            setLoading(true)
            // this is just a placeholder for now
            const res = await fetch('https://maps.googleapis.com/maps/api/place/textsearch/xml?query=restaurants+in+Sydney&key=AIzaSyD0QZayhC9H4t2TMDAVOXKIGgaEJh6tKzQ')
            const { events } = await res.json()

            setEventData(events)
            setLoading(false)
        }
        fetchEvents()
        console.log(eventData)
    }, [])*/

  return (
    <div>
          <Header />
          <Map />
    </div>
  );
}
//{!loading ? <Map eventData={eventData} /> : <h1> Searching...</h1>}
export default App;
