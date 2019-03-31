import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ShowPhoneCatalog = ({persons}) => {
  const rows = () => persons.map(person => 
    <li key={person.id}>
         {person.name} {person.number}
    </li>
   )

  return (
    <div>
      <h2>Numerot</h2>
      <div>
          {rows()}
      </div>
    </div>
  )
}

const App = () => {
  const  [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')  
  const names = persons.map(function(person) {
    return person['name'];
  })

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }  

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
        name: newName,
        number: newNumber,
        date: new Date().toISOString(),
        id: persons.length + 1,
    }
    const pos = names.indexOf(newName)
    pos<0 
      ? setPersons(persons.concat(personObject)) 
      : alert(newName + ' on jo luettelossa')
  
    setNewName('')    
    setNewNumber('')
  }

  const [ newFilter, setNewFilter ] = useState('')

  const handleFilterChange = (event) => {
    console.log(newFilter)
    setNewFilter(event.target.value)
    console.log(newFilter)
  }
  
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  return (
      <div>
        <h1>
          Puhelinluettelo
        </h1>
        
        <div>
          rajaa näytettäviä
          <input 
            value={newFilter}
            onChange={handleFilterChange}
          />
        </div>

        <div>
          <h2>
            lisää uusi
          </h2>
          <form onSubmit={addPerson}>
            <div>
                nimi:
                <input value={newName} onChange={handleNameChange} />
            </div> 
            <div>
                numero: 
                <input value={newNumber} onChange={handleNumberChange} />
            </div>
            <div>
                <button type="submit">lisää</button>
            </div>  
          </form>
        </div>

        <ShowPhoneCatalog persons={persons} />
      </div>
  )
}

export default App