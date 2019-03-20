import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const ShowMostVoted = (props) => {
    const MostVoted = points.indexOf(Math.max(...points));   
    return (
        <div>
            <h1>
                Anecdote with most votes
            </h1>
            <div>
                {props.anecdotes[MostVoted]}
            </div>
        </div>
    )
}
const App = (props) => {
    let randomNumber = 0
    const [selected, setSelected] = useState(0)
    
    const GetNext = () => {
        randomNumber = Math.floor(Math.random() * anecdotes.length)
        setSelected(randomNumber)
    }

    const Vote = (selected) => {
        points[selected] += 1  
    }

    return (
        <div>
            <h1>
                Anecdote of the day
            </h1>
            <div>
                {props.anecdotes[selected]}
            </div>
            <button onClick={() => Vote(selected)}>
                vote
            </button>
            <button onClick={GetNext}>
                next anecdote
            </button>
            <ShowMostVoted anecdotes={anecdotes} />
        </div>
    )   
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first plac e. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
let points = Array(anecdotes.length).fill(0);
    
ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)