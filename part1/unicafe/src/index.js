import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ text, handleClick }) => {
  return(
  <button onClick={handleClick}>
      {text}
  </button>
  )
}


const Statistic = ({ text, value }) => {
  if (text === "positive") {
    return (
      <tr>
        <td>{text}</td> 
        <td>{value} %</td>
      </tr>
    );
  } else {
  return (
    <tr>
      <td>{text}</td> 
      <td>{value}</td>
    </tr>
  );}
}

const Statistics = ({ good, neutral, bad }) => {
  let all = good + neutral + bad;
  let average = (good + bad * (-1)) / all;
  let positive = (good / all) * 100;
  
  if ((good || neutral || bad) !== 0) {
    return (
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={all} />
          <Statistic text="average" value={average} />
          <Statistic text="positive" value={positive} />
        </tbody>
      </table>
    );
  }
  
  return <div>No feedback given</div>
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text="good"/>
      <Button handleClick={handleNeutral} text="neutral"/>
      <Button handleClick={handleBad} text="bad"/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)