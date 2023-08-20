import React from 'react';
const myStyle = {
    color: '#ffffff',
    backgroundColor: 'red',
    minHeight: '100vh',
    textAlign: 'center',
    };

const linkStyle = {
    color: '#ffffff',
    fontSize: '30px',
    };

function Shows({ pokemon }) {
    const pokename = (name) =>  {
        return name[0].toUpperCase() + name.substring(1);
    }
  return (
    <div style={myStyle}>
          <h1>Gotta Catch 'Em All</h1>
          <h2>{pokename(pokemon.name)}</h2>
        <img src={`${pokemon.img}.jpg`} alt={pokemon.name} />
        <br/>
        <br/>
        <br/>
        <a href={`/pokemon`} style={linkStyle}>Back</a>
    </div>
  )
}

module.exports=Shows