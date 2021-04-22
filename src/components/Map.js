import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'

const Map = ({ center, zoom }) => {
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: 'AIzaSyBejaZOfwWW5yspBtDdfzPAGKIShmNyY8M'
                }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                <LocationMarker lat={center.lat} lng={center.lng}/>
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