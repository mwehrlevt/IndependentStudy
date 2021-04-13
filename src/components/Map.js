// The map component will display the Google map on the webpage by using an API
import { useState } from 'react'
import GoogleMapReact from 'google-map-react'

const Map = ({ center, zoom }) => {
    return
    (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: 'AIzaSyD0QZayhC9H4t2TMDAVOXKIGgaEJh6tKzQ'
                }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
            </GoogleMapReact>
        </div>
    )
}


Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}
export default Map