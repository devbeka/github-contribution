import React, { useEffect, useState } from 'react'
import { getCalendar } from '../../services/getCalendar'
import GraphWeeks from './GraphWeeks'
import GraphMonths from './GraphMonths'
import Contributions from './Contributions'
import GraphInfo from '../GraphInfo'
import './styles.scss'

const Graph = () => {
  const [state, setState] = useState([])

  const fetchData = async () => {
    try {
      const data = await getCalendar()
      setState(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="graph">
      <GraphMonths />
      <div className="graph__container">
        <GraphWeeks />
        <div className="graph__contribution">
          <Contributions state={state} />
        </div>
      </div>
      <GraphInfo />
    </div>
  )
}

export default Graph
