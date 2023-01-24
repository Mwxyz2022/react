import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const [userData, setUserData] = useState(null)
    const { userId } = useParams()

    useEffect(() => {
        fetch(`https://api.github.com/users/${userId}`)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error()
            })
            .then(dataUser => setUserData(dataUser))
    }, [userId])

    if (!userData) {
        return null
    }

    const { name, location } = userData
    const avatarUrl = userData.avatar_url

    return (
        <div className="user">
            <img alt="User Avatar" src={avatarUrl} className="user__avatar" />
            <div className="user__info">
                <span className="user__name">{name}</span>
                <span className="user__location">{location}</span>
            </div>
        </div>
    )
}

export default User
