import React, { Component } from 'react'
import PokeCard from './PokeCard';
import './Pokedex.css';


class Pokedex extends Component {
    
    render() {
        let title;
		if (this.props.isWinner) {
			title = <h1 className="Pokedex-winner">Winning Hand</h1>;
		} else {
			title = <h1 className="Pokedex-loser">Losing Hand</h1>;
		}
        const pokeCard = this.props.pokemon.map((p) => {
           return (<PokeCard key={p.id} id={p.id} name={p.name} type={p.type} exp={p.base_experience} />);
        })
        return (
            <div className="Pokedex">
                {title}
                <h4>Total Experience: {this.props.exp}</h4>
                <div className="Pokedex-cards">{pokeCard}</div>
            </div>
        );
    }
}

export default Pokedex;