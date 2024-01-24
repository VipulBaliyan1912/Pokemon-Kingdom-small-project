import React from 'react';
import '../cards/pokemon-card.css';
import { Button } from '../';

export function PokemonDetailModal({ pokemon, handleKnowMore }) {
  const { type, name, imageUrl, height, weight, stats } = pokemon;

  if (!pokemon) {
    return null;
  }

  return (
    <div className={`stats-wrapper ${type}-background`}>
      <div className={`stats-container`}>
        <img
          className="pokemon-image"
          src={imageUrl ? imageUrl : 'https://i.imgur.com/UvVWR.png'}
          alt={name}
        />
        <h2 className="pokemon-name">{name}</h2>
      </div>

      <div className={`mini-stats-wrapper ${type}-background`}>
        <div className={`stats-container`}>
          <h4>Weight: {weight}</h4>
          <h4>Height: {height}</h4>
        </div>

        <div className={'stats-container'}>
          {stats.map((stat, ind) => {
            return (
              <>
                <div
                  style={{
                    marginLeft: 5,
                    display: 'flex',
                    alignItem: 'flex-start',
                  }}
                  key={'stat' + ind}
                >
                  <div>
                    <b>Stat{ind + 1}: </b>
                  </div>
                  <p
                    style={{
                      marginLeft: 5,
                      width: 75,
                      textAlign: 'left',
                    }}
                  >
                    {stat.name}
                  </p>
                </div>
              </>
            );
          })}
        </div>
        <div className={'stats-container'}>
          {stats.map((stat, ind) => {
            return (
              <>
                <p key={'bs' + ind}>
                  <b>Bs{ind + 1}: </b>
                  {stat.bs}
                </p>
              </>
            );
          })}
        </div>
      </div>
      <Button
        className={`${type}Btn`}
        handleClick={() => handleKnowMore()}
        styles={{
          position: 'absolute',
          top: 25,
          right: 30,
          width: 30,
          height: 30,
          padding: 10,
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 25,
          border: 'none',
          cursor: 'pointer',
        }}
        title="⨯"
      />
    </div>
  );
}
