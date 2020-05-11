import React from 'react';
import './Card.styles.scss';

const Card = ({ ClientId, ClientName, PhysicalSite, Orders, Units }) => {
    return (
        <div className='card'>
            <div className='image-container'>
                <img
                    src={`https://haslaminator.github.io/torque-test/img/${ClientId}.png`}
                    alt={ClientName}
                />
            </div>

            <hr />
            <h1>{ClientName}</h1>
            <h1>{PhysicalSite}</h1>
            <h1>Orders: {Orders}</h1>
            <h1>Units: {Units}</h1>
        </div>
    );
};

export default Card;
