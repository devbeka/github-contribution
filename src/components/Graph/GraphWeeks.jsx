import React from 'react'

const GraphWeeks = () => {
  const weeks = ['Пн.', 'Ср.', 'Пт.']
  return (
    <ul className="weeks">
      {weeks.map((week) => (
        <li key={week}>
          <span>{week}</span>
        </li>
      ))}
    </ul>
  )
}

export default GraphWeeks