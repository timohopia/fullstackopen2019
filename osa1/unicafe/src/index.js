import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = (props) => {
    return (
        <tr>
            <td>{props.text}</td><td>{props.value}</td>
        </tr>
    )
} 
const Statistics = (props) => {
    let count = props.good + props.neutral + props.bad
    if (count === 0) {
        return (
            <div>
            <h2>
                statistiikka
            </h2>
                <div>
                    ei yhtään palautetta annettu
                </div>
            </div>
        )
    }

    return (
        <div>
            <h2>
                statistiikka
            </h2>
            <table>
                <tbody>
                    <Statistic text="hyvä" value ={props.good} />
                    <Statistic text="neutraali" value ={props.neutral} />
                    <Statistic text="huono" value ={props.bad} />
                    <Statistic text="yhteensä" value ={count} />
                    <Statistic text="keskiarvo" value ={(props.good - props.bad)/count} />
                    <Statistic text="positiivisia" value ={100*props.good/count + ' %'} />
                </tbody>
            </table>
        </div>
    )
}

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
)

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodClick = () => 
        setGood(good + 1)
    const handleNeutralClick = () => 
        setNeutral(neutral + 1)
    const handleBadClick = () => 
        setBad(bad + 1)

return (
    <div>
        <h1>
            anna palautetta
        </h1>
        <div>
            <Button handleClick={handleGoodClick} text='hyvä' />
            <Button handleClick={handleNeutralClick} text='neutraali' />
            <Button handleClick={handleBadClick} text='huono' />
        </div>
        <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)