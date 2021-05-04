import { Icon } from '@iconify/react'
import severeStormsIcon from '@iconify/icons-mdi/weather-lightning-rainy'

const SevereStormsLocationMarker = ({ storms, onClick }) => {
    /*storms.map((value, index) => {
        const lat = value.coordinates[1],
        const lng = value.coordinates[0]
    }*/

    return (
        <div className="severe-storms-location-marker" onClick={onClick}>
            <Icon icon={severeStormsIcon} className="severe-storms-icon" />
        </div>
    )
}

export default SevereStormsLocationMarker
