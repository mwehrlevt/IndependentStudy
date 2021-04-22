import { Icon } from '@iconify/react'
import seaIcon from '@iconify/icons-mdi/waves'

const SeaAndIceLocationMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={seaIcon} className="sea-icon" />
        </div>
    )
}

export default SeaAndIceLocationMarker
