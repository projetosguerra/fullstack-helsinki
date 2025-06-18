import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} | Exercises: {props.exercises}</p>
  )
}

const Content = (props) => {
  const parts = props.parts
  const [part1, part2, part3] = parts

  return (
    <>
      <Part part={parts[0].name} exercises={parts[0].exercises}/>
      <Part part={parts[1].name} exercises={parts[1].exercises}/>
      <Part part={parts[2].name} exercises={parts[2].exercises}/>
    </>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises: {props.exercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State od a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>

      <Content 
        parts={[part1, part2, part3]}
      />

      <Total exercises={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

export default App
