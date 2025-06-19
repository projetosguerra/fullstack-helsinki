import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      buton press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = (props) => { 
  console.log('props value is:', props)
  const { onClick, text } = props
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updateLeft = left + 1
    setLeft(updateLeft)
    setTotal(updateLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updateRight = right + 1
    setRight(updateRight)
    setTotal(left + updateRight)
  }

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text='left' />
      <Button onClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />
      <p>Total: {total}</p>
    </div>
  )
}

/***const Display = ({ counter }) => <div>{counter}</div>

/***const Display = (props) => {
    return (
      <div>
        {props.counter}
      </div>
    )
}***/

/***const Button = ({ onClick, text }) => <button onCLick={onClick}>{text}</button>

/***const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}***/

/***const App = () => {
  const [ counter, setCounter ] = useState(0)
  console.log('rendering with counter value:', counter)

  const increaseByOne = () => {
    setCounter(counter + 1)
    console.log('clicked', counter + 1, 'value before: ', counter)
  }

  const decreaseByOne = () => {
    setCounter(counter - 1)
    console.log('clicked', counter - 1, 'value before: ', counter)
  }
  
  const setToZero = () => {
    setCounter(0)
    console.log('resetting to zero, value before: ', counter)
  }

  /***const handleClick = () => {
    console.log('clicked')
  }***/

  /***setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  console.log('rendering...', counter)***/

  /***return (
    <div>
      <Display counter={counter} />
      <Button
        onClick={increaseByOne}
        text='plus'
      />
      <Button
        onClick={decreaseByOne}
        text='minus'
      />
      <Button
        onClick={setToZero}
        text='zero'
      />
    </div>
  )
}***/

export default App
