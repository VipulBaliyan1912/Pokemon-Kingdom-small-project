import React,{useState} from 'react';
import { Header, PokemonCards } from './components';
import './components/myStyles.css';

export default function App() {

  return (
    <div id="app">
      <Header />
      <PokemonCards />
    </div>
  );
}
