import React, { useState } from 'react'
import { addDays, parse, startOfWeek } from 'date-fns'
import format from 'date-fns/format'

const Contributions = ({ state }) => {
  const [selectedDate, setSelectedDate] = useState(null)

  const dates = Object.keys(state).map((date) =>
    parse(date, 'yyyy-MM-dd', new Date())
  )

  const sortedDates = dates.sort((a, b) => a - b)

  const startDate = sortedDates[0]
  const endDate = sortedDates[sortedDates.length - 1]

  const startOfFirstWeek = startOfWeek(startDate, { weekStartsOn: 1 }) // 1 означает понедельник

  const dateRange = []
  let currentDate = startOfFirstWeek

  while (currentDate <= endDate) {
    const formattedDate = format(currentDate, 'EEEE, MMMM dd, yyyy')
    dateRange.push(formattedDate)
    currentDate = addDays(currentDate, 1)
  }

  const handleDateClick = (date) => {
    setSelectedDate(selectedDate === date ? null : date)
  }

  const contributions = (
    <>
      {dateRange.map((date) => {
        const count =
          state[
            format(parse(date, 'EEEE, MMMM dd, yyyy', new Date()), 'yyyy-MM-dd')
          ] || 0
        let contributionClass = 'contribution'

        if (count >= 30) {
          contributionClass += ' more-30'
        } else if (count >= 20) {
          contributionClass += ' more-20'
        } else if (count >= 10) {
          contributionClass += ' more-10'
        } else if (count > 0) {
          contributionClass += ' more-0'
        }

        return (
          <div
            onClick={() => handleDateClick(date)}
            key={date}
            className={`${contributionClass} ${
              selectedDate === date ? 'selected' : ''
            }`}
          >
            {selectedDate === date && (
              <div className="contributionColor">
                {count === 0 ? (
                  <p>No contributions</p>
                ) : (
                  <p>{count} contributions</p>
                )}
                <span>{date}</span>
              </div>
            )}
          </div>
        )
      })}
    </>
  )

  return contributions
}

export default Contributions
