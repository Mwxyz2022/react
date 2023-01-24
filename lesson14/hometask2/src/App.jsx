import React, { useState } from 'react'
import Clock from './Clock'

const App = () => {
    const [isVisible, setVisible] = useState(true)
    return (
        <>
            <div className="container">
                <button className="btn btn_show" onClick={() => setVisible(true)}>
                    Show
                </button>
                <button className="btn btn_hide" onClick={() => setVisible(false)}>
                    Hide
                </button>
            </div>
            {isVisible && (
                <>
                    <Clock location={'San Francisco'} offset={-8} />
                    <Clock location={'Dubai'} offset={4} />
                    <Clock location={'Kyiv'} offset={2} />
                </>
            )}
        </>
    )
}

export default App
