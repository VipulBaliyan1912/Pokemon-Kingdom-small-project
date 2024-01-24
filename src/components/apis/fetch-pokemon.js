import React from 'react';
import { transfromPokemonDetails } from './transformer.js';

export async function fetchPokemons(offset, limit) {
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    );
    const jsonRes = await res.json();
    return jsonRes;
  } catch (e) {
    console.log(e);
  }
}

export async function fetchPokemonDetails(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();

    return transfromPokemonDetails(data);
  } catch (e) {
    console.log(e);
  }
}
