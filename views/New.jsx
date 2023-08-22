import React from 'react'

function New() {
  return (
    <div>
        {/* form */}
        <h1>New Pokemon Page</h1>
        <form action="/pokemon" method="POST">
           Name: <input type="text" name='name'/> <br/>
           Element: <input type="text" name='color'/> <br/>
           Ready To Be Enslaved: <input type="checkbox" name='readyToBeEnslaved'/> <br/>
           <input type="submit" value="create pokemon"/>
        </form>
    </div>
  )
}

module.exports = New