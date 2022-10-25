import React, {useState} from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'


// const pika = {
//   name: "Picachu",
//   type: "Electric",
//   evolved: true,
//   weight: 6,
//   color: 'yellow',
//   image: 'https://archives.bulbagarden.net/media/upload/b/b0/025Pikachu-Cosplay.png',
//   id: 0
// }

const PokemonCard = (props) => {

    const evoluirPokemon = () => {
        props.setPokemon(props.pika)
    }
    
  return (
    <Card color={props.pokemon.color}>
        <img src={props.pokemon.image} alt={`Pokemon`}/>
        <PokemonName>{props.pokemon.name}</PokemonName>
        <PokemonType>{props.pokemon.type}</PokemonType>
        <p>{props.pokemon.weight}kg</p>

        <EvolveButton onClick={evoluirPokemon}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard