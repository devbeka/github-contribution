import React from 'react'
import './styles.scss'

const GraphInfo = () => {
  const contributionRanges = [
    { className: '', label: 'No contributions' },
    { className: 'more-0', label: '1-9 contributions' },
    { className: 'more-10', label: '10-20 contributions' },
    { className: 'more-20', label: '20-30 contributions' },
    { className: 'more-30', label: '30+ contributions' },
  ]

  return (
    <div className="graphInfo">
      <span>Меньше</span>
      {contributionRanges.map((range) => (
        <div
          key={range.className}
          className={`contribution ml ${range.className}`}
        >
          <div className="contributionColor">
            <p>{range.label}</p>
          </div>
        </div>
      ))}
      <span>Больше</span>
    </div>
  )
}

export default GraphInfo
