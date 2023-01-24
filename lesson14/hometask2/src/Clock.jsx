import React, { useEffect, useState } from 'react'
import moment from 'moment'

const Clock = ({ location, offset }) => {
    const getTimeFromOffset = offsetTime => {
        const currentTime = new Date()
        const utcOffset = currentTime.getTimezoneOffset() / 60

        return new Date(currentTime.setHours(currentTime.getHours() + offsetTime + utcOffset))
    }

    const [localTime, setTime] = useState(moment(getTimeFromOffset(offset)).format('LTS'))

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(moment(getTimeFromOffset(offset)).format('LTS'))
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className="clock">
            <div className="clock__location">{location}</div>
            <div className="clock__time">{localTime}</div>
        </div>
    )
}

export default Clock
