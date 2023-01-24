import React, { useState, useEffect } from 'react'

const ConnectionStatus = () => {
    const [status, setStatus] = useState(true)

    useEffect(() => {
        const handleStatus = e => setStatus(e.target.navigator.onLine)

        window.addEventListener('online', handleStatus)
        window.addEventListener('offline', handleStatus)
        return () => {
            window.removeEventListener('online', handleStatus)
            window.removeEventListener('offline', handleStatus)
        }
    }, [])

    return (
        <div className={`status ${status ? null : 'status_offline'}  `}>
            {status ? 'online' : 'offline'}
        </div>
    )
}

export default ConnectionStatus
