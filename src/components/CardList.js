import React from 'react';
import Card from './Card';

const CardList = ({ pokemon }) => {
    const cardComponent = pokemon.map((results, index) => {
        return <Card key={index} name={pokemon[index].name} index={index + 1} />
    });

    return (
        <div className="mt4">
            {cardComponent}
        </div>
    );
}

export default CardList;