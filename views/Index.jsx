import React from 'react';

function Index({ pokemon }) {
  return (
    <div>
        <h1>Index</h1>
        {pokemon.map((poke, i) => {
            return (
                <li key={i}>{poke.name}</li>
            )
        })}
    </div>
  )
}

module.exports=Index