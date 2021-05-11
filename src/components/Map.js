import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'
import SevereStormsLocationMarker from './SevereStormsLocationMarker'
import SeaAndIceLocationMarker from './SeaAndIceLocationMarker'
import VolcanoLocationMarker from './VolcanoLocationMarker'

const Map = ({ checkBoxes, eventData, longitude, latitude, center, zoom }) => {
    console.log(checkBoxes.checkedNASAProps[1].completed);
    console.log(longitude);
    //console.log(latitude);
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map(ev => {
        // Severe Storm data
        if (checkBoxes.checkedNASAProps[1].completed) {
            if (ev.categories[0].id === 10) {
                return <SevereStormsLocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
                    onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
                
            }
        }
        
        // Fire data
        if (checkBoxes.checkedNASAProps[0].completed) {
            if (ev.categories[0].id === 8) {
                return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
                    onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}/>
            }
        }

        // Sea and Ice data
        if (checkBoxes.checkedNASAProps[3].completed) {
            if (ev.categories[0].id === 15) {
                return <SeaAndIceLocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
                    onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
            }
        }

        // Volcano data (point type)
        if (checkBoxes.checkedNASAProps[2].completed) {
            if (ev.categories[0].id === 12 && ev.geometries[0].type === "Point") {
                return <VolcanoLocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
                    onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
            }

            // Volcano data (polygon type)
            if (ev.categories[0].id === 12 && ev.geometries[0].type === "Polygon") {
                return <VolcanoLocationMarker lat={ev.geometries[0].coordinates[0][0][1]} lng={ev.geometries[0].coordinates[0][0][0]}
                    onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
            }
        }

        return null
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: 'AIzaSyBejaZOfwWW5yspBtDdfzPAGKIShmNyY8M'
                }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}


Map.defaultProps = {
    center: {
        lat: 44.4759,
        lng: -73.2121
    },
    zoom: 6
}
export default Map
