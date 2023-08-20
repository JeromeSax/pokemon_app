import React from 'react';
const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    minHeight: '100vh',
    };

function Index({ pokemon }) {
  return (
    <div style={myStyle}>
        <h1>See All The Pokemon!</h1>
        {pokemon.map((poke, i) => {
            return (
                <li key={i}>{poke.name}</li>
            )
        })}
    </div>
  )
}

module.exports=Index