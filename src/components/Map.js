import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'
import SevereStormsLocationMarker from './SevereStormsLocationMarker'
import SeaAndIceLocationMarker from './SeaAndIceLocationMarker'
import VolcanoLocationMarker from './VolcanoLocationMarker'

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map(ev => {
        if (ev.categories[0].id === 10) {
            const storms = ev.geometries

            storms.map((value, index) => {
                console.log(value.coordinates[1], value.coordinates[0])
                return <SevereStormsLocationMarker lat={value.coordinates[1]} lng={value.coordinates[0]}
                    onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
            })
            
        }
        if (ev.categories[0].id === 8) {
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
                onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}/>
        }

        if (ev.categories[0].id === 15) {
            return <SeaAndIceLocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
                onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
        }

        // TODO: FIX
        //if (ev.categories[0].id === 12) {
        //    return <VolcanoLocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
        //        onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
        //}

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