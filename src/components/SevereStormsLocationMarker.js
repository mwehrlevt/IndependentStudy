import { Icon } from '@iconify/react'
import severeStormsIcon from '@iconify/icons-mdi/weather-lightning-rainy'

const SevereStormsLocationMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="severe-storms-location-marker" onClick={onClick}>
            <Icon icon={severeStormsIcon} className="severe-storms-icon" />
        </div>
    )
}

export default SevereStormsLocationMarker
