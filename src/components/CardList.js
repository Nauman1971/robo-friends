import React from 'react'
import Card from './Card';

function CardList({ robots }) {
    return (
        <>
            {
                robots.map(robot => (
                    <Card
                        key={robot.id}
                        id={robot.id}
                        email={robot.email}
                        username={robot.username}
                        name={robot.name} />
                ))
            }
        </>
    )
}

export default CardList
