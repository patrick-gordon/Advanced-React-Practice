import React from 'react'

export default function PlayerCard({name, rank, team}) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{rank}</p>
            <p>{team}</p>
        </div>
    )
}
