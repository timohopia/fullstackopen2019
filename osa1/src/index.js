import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [value, setValue] = useState(10)

  const handleClick = () => {
    console.log('nappia painettu')
    setValue(0)
  }

  return (
    <div>
      {value}
      <button onClick={handleClick}>nappi</button>
    </div>
  )
}


ReactDOM.render(
  <App />, 
  document.getElementById('root')
)