// The map component will display the Google map on the webpage by using an API
import { useState } from 'react'
import GoogleMapReact from 'google-map-react'

const Map = ({ eventData, center, zoom }) => {
    return
    (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{
                    key:'AIzaSyD0QZayhC9H4t2TMDAVOXKIGgaEJh6tKzQ'}}
                defaultCenter={center}
                defaultZoom={zoom}
            >
            </GoogleMapReact>
        </div>
    )
}

export default Map