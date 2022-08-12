import { useState } from 'react'


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <div className='feedback'>
      <h1>give feedback</h1>
        <Button text="good" onClick={() => setGood(good + 1)}/>
        <Button text="neutral" onClick={() => setNeutral(neutral + 1)}/>
        <Button text="bad" onClick={() => setBad(bad + 1)}/>
      </div>
      <div className='statistics'>
      <h1>statistics</h1>
        <Stat text="good" value={good}/>
        <Stat text="neutral" value={neutral}/>
        <Stat text="bad" value={bad}/>
        <Stat text="total" value={good + neutral + bad}/>
        <Stat text="average" value={(good - bad) / (good + neutral + bad)}/>
        <Stat text="psotive" value={ 100 *good / (good + neutral + bad)}/>
      </div>
    </div>
  )
}

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Stat = ({value, text}) => <p>{text} {value}</p>


export default App