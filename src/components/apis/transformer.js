import React from 'react';

export function transfromPokemonDetails(data) {
  const newPokemonDetails = {
    name: data.name,
    id: data.id,
    height: data.height,
    weight: data.weight,
    imageUrl: data.sprites.other.dream_world.front_default,
    type: data.types[0].type.name,
    stats: data.stats.map((stat) => {
      return {
        bs: stat.base_stat,
        name: stat.stat.name,
      };
    }),
  };
  return newPokemonDetails;
}
