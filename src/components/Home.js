import React, { Fragment, useState, useEffect } from 'react'
import CardList from './CardList';
import PokeResult from './PokeResult';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

export const Home = () => {
    const [pokemon, setPokemon] = useState([]);
    const [searchedPoke, setSearchedPoke] = useState({});

    useEffect(() => {
        initialPokemon();
    }, [])

    const initialPokemon = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
            .then(response => response.json())
            .then(results => setPokemon(results.results))
            .then(setSearchedPoke({}))
    }

    const getPoke = () => {
        let poke = document.querySelector('.pokeForm').value
        if (poke === "") {
            alert("Please enter a Pokemon to search")
            return;
        }
        let pokeValue = poke.toLowerCase()
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokeValue}`)
            .then(response => {
                if (response.ok) {
                    response = response.json()
                        .then(pokeSelect => setSearchedPoke([pokeSelect.height, pokeSelect.id, pokeSelect.name, pokeSelect.weight, pokeSelect.types]))
                        .then(setPokemon([]))
                } else {
                    alert(`No Pokemon found for '${poke}'`)
                }
            })
    }

    const pokeChoice = (e) => {
        e.preventDefault();
        getPoke()
    }

    const clearInput = () => {
        initialPokemon();
    }
    return (
        <Fragment>
            <SearchBox pokeSubmit={pokeChoice} clear={clearInput} />
            <Scroll>
                <CardList initPokemon={pokemon} />
                <PokeResult searchedPokemon={searchedPoke} />
            </Scroll>
        </Fragment>
    )
}

export default Home;