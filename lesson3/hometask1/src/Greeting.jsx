import React from 'react'
import moment from 'moment'

const Greeting = props => {
    const yearsOld = moment().diff(props.birthDate, 'years')

    return (
        <div className="greeting">{`My name is ${props.firstName} ${props.lastName}. I'm ${yearsOld} years old`}</div>
    )
}

export default Greeting
