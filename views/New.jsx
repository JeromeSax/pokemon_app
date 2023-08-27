import React from 'react';
const myStyle = {
    color: '#ffffff',
    backgroundColor: 'purple',
    minHeight: '100vh',
    textAlign: 'center',
    fontSize: '30px',
    };

function New() {
  return (
    <div style={myStyle}>
        {/* form */}
        <h1>New Pokemon Page</h1>
        <form action="/pokemon" method="POST">
           Name: <input type="text" name='name'/> <br/>
           {/* Element: <input type="text" name='color'/> <br/> */}
           Ready To Fight: <input type="checkbox" name='readyToFight'/> <br/>
           <input type="submit" value="create pokemon"/>
        </form>
    </div>
  )
}

module.exports = New