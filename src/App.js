import { useState } from 'react'


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGoodRating = () => setGood(good + 1)
  const addNeutralRating = () => setNeutral(neutral + 1)
  const addBadRating = () => setBad(bad + 1)

  return (
    <div>
      <div className='feedback'>
      <h1>give feedback</h1>
        <Button text="good" onClick={addGoodRating}/>
        <Button text="neutral" onClick={addNeutralRating}/>
        <Button text="bad" onClick={addBadRating}/>
      </div>
      <div className='statistics'>
      <h1>statistics</h1>
        <Stat text="good" value={good}/>
        <Stat text="neutral" value={neutral}/>
        <Stat text="bad" value={bad}/>
      </div>
    </div>
  )
}

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Stat = ({value, text}) => <p>{text} {value}</p>


export default App