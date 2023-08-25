import axios from 'axios'

export const getCalendar = async () => {
  try {
    const { data } = await axios.get('https://dpg.gg/test/calendar.json')
    return data
  } catch (error) {
    throw new Error('Failed to fetch calendar data')
  }
}
