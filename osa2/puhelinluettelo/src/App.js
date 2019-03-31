import React, { useState } from 'react'

const Filter = (props) => {
  const [ newFilter, setNewFilter ] = useState('')
  const handleFilterChange = (event) => {
      setNewFilter(event.target.value)
      // mikä mahtaa olla oikea toteutus tehtävään "2.9*: puhelinluettelo step4"
      // newFilter arvo "laahaa" koko ajan yhden perässä kun sitä
      // lokittaa tässä console.log:lla
    }
  
  return (
    <div>
      rajaa näytettäviä
      <input 
          value={newFilter}
          onChange={handleFilterChange}
      />
    </div>
  )  
}

const AddPersonForm = (props) => {
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')  
  const [ persons, setPersons] = useState(props.persons) 

  const names = props.persons.map(function(person) {
    return person['name'];
  })
  //console.log(names)

  const addPerson = (event) => {
      event.preventDefault()
      const personObject = {
          name: newName,
          number: newNumber,
          date: new Date().toISOString(),
          id: persons.length + 1,
      }
      const pos = names.indexOf(newName)
      setPersons(persons.concat(personObject))
      console.log(persons)
      //pos<0 
        //? setPersons(persons.concat(personObject)) 
        //: alert(newName + ' on jo luettelossa')
        // jostain syystä tämä ei toimi:
        //: alert(' ${newName} on jo luettelossa')
      setNewName('')    
      setNewNumber('')
  }

  const handleNameChange = (event) => {
      setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
      setNewNumber(event.target.value)
  }

  
  return (
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
  )
}

const ShowTelephoneCatalog = ({persons}) => {
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
  const [persons, setPersons] = useState([
    { id:1, name: 'Arto Hellas', number: '040-123456' },
    { id:2, name: 'M  artti Tienari', number: '040-123456' },
    { id:3, name: 'Arto Järvinen', number: '040-123456' },
    { id:4, name: 'Lea Kutvonen', number: '040-123456' }
  ]) 
    
  return (
      <div>
        <h1>
          Puhelinluettelo
        </h1>
        <Filter />
        <AddPersonForm persons={persons} />
        <ShowTelephoneCatalog persons={persons} />
      </div>
  )
}

export default App