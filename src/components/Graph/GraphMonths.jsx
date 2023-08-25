import React from 'react'

const GraphMonths = () => {
  const months = [
    'Июнь',
    'Июль',
    'Авг.',
    'Сент.',
    'Окт.',
    'Нояб.',
    'Дек.',
    'Янв.',
    'Фев.',
    'Март',
    'Апр.',
    'Май',
  ]

  return (
    <ul className="months">
      {months.map((month) => (
        <li key={month}>
          <span>{month}</span>
        </li>
      ))}
    </ul>
  )
}

export default GraphMonths
