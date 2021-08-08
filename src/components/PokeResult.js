import React from 'react';

const PokeResult = ({ searchedPokemon }) => {
    if (searchedPokemon !== undefined && searchedPokemon.length) {
        return (
            <div className="tc bg-navy dib br3 pa3 ma3 grow bw2 shadow-5">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${searchedPokemon[1]}.png`} alt="{searchedPokemon[4][0].type.name}" />
                <div>
                    <h2 style={{ textTransform: 'capitalize' }}>{searchedPokemon[2]}</h2>
                    <h2 style={{ textTransform: 'capitalize' }}>Type: {searchedPokemon[4][0].type.name}</h2>
                    <h2 style={{ textTransform: 'capitalize' }}>Height: {(searchedPokemon[0] / 10).toFixed(1)} m</h2>
                    <h2 style={{ textTransform: 'capitalize' }}>Weight: {(searchedPokemon[3] / 10).toFixed(1)} kg</h2>
                </div>
            </div>
        );
    } else {
        return null;
    }

}

export default PokeResult;

