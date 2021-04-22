import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'

const Map = ({ eventData, center, zoom }) => {
    const markers = eventData.map(ev => {
        if (ev.categories[0].id === 8) {
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} />
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