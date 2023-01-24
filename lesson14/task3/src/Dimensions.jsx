import React, { useEffect, useState } from 'react'

const Dimensions = () => {
    const [dimensions, setDimensions] = useState({
        width: null,
        height: null,
    })
    const { width, height } = dimensions

    useEffect(() => {
        const { innerHeight, innerWidth } = window
        setDimensions({ width: innerWidth, height: innerHeight })
    })

    return <div className="dimensions">{`${width}px - ${height}px`}</div>
}

export default Dimensions
