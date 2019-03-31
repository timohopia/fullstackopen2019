import React from 'react'

const Header = (props) => {
    return (
        <div>
            <h1>
                {props.course}
            </h1>
        </div>
    )
  }

const Part = ({part}) => {
    return (
        <div>
            <p>
                {part.name} {part.exercises}
            </p>
        </div>
    )
}
const Content = ({parts}) => {
    const rows = () => parts.map(part =>
        <Part 
        key={part.id}
        part={part}
        />
      )
    return (
        <div>
            {rows()}
        </div>
    )
}

const Total = ({parts}) => {
    const reducer = (accumulator, currentValue) => {
        return accumulator + currentValue.exercises
    }
    const total = parts.reduce(reducer,0)
    return (
        <div>
            yhteensð¤ {total} tehtð¤vð¤ð¤
        </div>
    )
}

const Course = (props) => {
    return (
        <div>
            <Header course={props.course.name} />
            <Content parts={props.course.parts} />
            <Total parts={props.course.parts} />
        </div>
    )
}

const Courses = ({courses}) => {
    const rows = () => courses.map(course =>
        <Course 
            key={course.id}
            course={course}
        />
      )
    return (
        <div>
            {rows()}
        </div>
    )
}

export default Courses