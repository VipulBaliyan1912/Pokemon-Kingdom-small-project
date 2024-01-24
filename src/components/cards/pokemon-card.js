import React, { useEffect, useState } from 'react';
import { fetchPokemonDetails } from '../apis';
import './pokemon-card.css';
import { Button } from '../';

export function PokemonCard({ pokemonUrl, handleKnowMore }) {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    fetchPokemonDetails(pokemonUrl).then((pokemon) => {
      setPokemon(pokemon);
    });
  }, []);

  if (!pokemon) {
    return null;
  }

  const { id, type, name, imageUrl } = pokemon;
  // const type = pokemon.types[0].type.name;
  // const imgSrc = pokemon.sprites.other.dream_world.front_default;
  // const pokemonName = pokemon.name.toUpperCase();
  // const id = pokemon.id;

  return (
    pokemon && (
      <div className={`pokemon-card-container ${type}-background`}>
        <div>
          <small className="pokemon-id-container">#{id}</small>
        </div>
        <img className="pokemon-image" src={imageUrl ? imageUrl :'https://i.imgur.com/UvVWR.png'} alt={name} />
        <h3 style={{width: 180}} className="pokemon-name">{name.toUpperCase()}</h3>
        <h5 id="pokemon-type">
          Type: {type.charAt(0).toUpperCase() + type.slice(1)}
        </h5>
        <Button
          className={`${type}Btn`}
          styles={{
            fontFamily: "'poppins'",
            margin: 10,
            paddingTop: 6,
            fontSize: 16,
            paddingBottom: 6,
            paddingRight: 20,
            paddingLeft: 20,
            border: 'none',
            borderRadius: 4,
          }}
          handleClick={() => {
            handleKnowMore(pokemon);
          }}
          title="Know more..."
        />
      </div>
    )
  );
}
