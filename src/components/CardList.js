import React from 'react';
import Card from './Card';

const CardList = ({ initPokemon }) => {
    const cardComponent = initPokemon.map((results, index) => {
        return <Card key={index} name={results.name} index={index + 1} />
    });

    return (
        <div className="mt4">
            {cardComponent}
        </div>
    );
}

export default CardList;