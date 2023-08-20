import React from 'react';
const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    minHeight: '100vh',
    };

const pokename = (name) =>  {
return name[0].toUpperCase() + name.substring(1);
}

// console.log(pokename("bulb"))

function Index({ pokemon }) {
  return (
    <div style={myStyle}>
        <h1>See All The Pokemon!</h1>
        <ul>
            {pokemon.map((poke, i) => {
                return (
                    <li key={i}>
                       <a href={`/pokemon/${i}`}>{pokename(poke.name)}</a>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

module.exports=Index