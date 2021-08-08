import React, { Component } from 'react';
import CardList from './components/CardList';
import PokeResult from './components/PokeResult';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import Navbar from './components/Navbar';

class App extends Component {
    constructor() {
        super()
        this.state = {
            pokemon: [],
            searchedPoke: {},
            searchField: ''
        }
    }

    initialPokemon = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
            .then(response => response.json())
            .then(results => this.setState({ pokemon: results.results }))
    }

    componentDidMount() {
        this.initialPokemon();
    }

    getPoke = () => {
        let poke = document.querySelector('.pokeForm').value
        if (poke === "") {
            alert("Please enter a Pokemon to search")
            return;
        }
        fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
            .then(response => {
                if (response.ok) {
                    response = response.json()
                        .then(pokeSelect => this.setState({ searchedPoke: [pokeSelect.height, pokeSelect.id, pokeSelect.name, pokeSelect.weight, pokeSelect.types], searchField: poke, pokemon: [] }))
                } else {
                    alert(`No Pokemon found for '${poke}'`)
                }
            })
    }

    pokeChoice = (e) => {
        e.preventDefault();
        this.getPoke()
    }

    clearInput = () => {
        this.initialPokemon();
    }

    render() {
        return (
            <div className="tc">
                <Navbar title='Poké Cards' />
                <SearchBox pokeSubmit={this.pokeChoice} clear={this.clearInput} />
                <Scroll>
                    <CardList pokemon={this.state.pokemon} />
                    <PokeResult searchedPokemon={this.state.searchedPoke} />
                </Scroll>
            </div>
        )
    }
}


export default App;