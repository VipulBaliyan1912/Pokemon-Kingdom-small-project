import React, { useEffect, useState } from 'react';
import { fetchPokemons } from '../apis';
import { PokemonCard } from './pokemon-card.js';
import './pokemon-card.css';
import { Button } from '../';
import { PokemonDetailModal } from '../../components';
import { Loader } from '../';

export function PokemonCards() {
  const [offset, setOffset] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState();
  const [loader, setLoader] = useState(true);
  const [loading, setLoading] = useState(true);

  const handleKnowMore = (pokemon) => {
    setSelectedPokemon(pokemon);
  };
  const loadMore = () => {
    setLoading(true);
    setOffset((prev) => prev + 25);
  };

  useEffect(() => {
    fetchPokemons(offset, 25).then((data) => {
      setLoader(true);
      setPokemons((prevPokemons) => {
        return prevPokemons.concat(data.results);
      });
      setLoader(false);
      setLoading(false);
    });
  }, [offset]);

  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
        <div>
          <div className="pokemon-card-wrapper">
            {pokemons.map((pokemon, index) => {
              return (
                <PokemonCard
                  key={pokemon.name + index}
                  pokemonUrl={pokemon.url}
                  handleKnowMore={handleKnowMore}
                />
              );
            })}
            {selectedPokemon && (
              <PokemonDetailModal
                pokemon={selectedPokemon}
                handleKnowMore={handleKnowMore}
              />
            )}
          </div>

          {pokemons.length <= '1302' ? (
            <Button
              loading={loading}
              className={'loadMoreBtn'}
              handleClick={loadMore}
              title="More Pokemon"
            />
          ) : (
            ''
          )}
        </div>
      )}
    </div>
  );
}
