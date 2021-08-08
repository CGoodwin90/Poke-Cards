import React from 'react';

const Card = ({ name, index }) => {
    return (
        <div className="tc bg-navy dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`} alt="" />
            <div>
                <h2 style={{ textTransform: 'capitalize', color: '#fff' }}>{name}</h2>
            </div>
        </div>
    );
}

export default Card;