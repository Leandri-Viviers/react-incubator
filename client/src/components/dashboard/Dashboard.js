// Components
import { useState } from 'react'
import Calendar from './Calendar'
import LeftPersistentDrawer from './LeftPersistentDrawer'
import Itinerary from './Itinerary'

const Dashboard = () => {
  // State
  const [open, setOpen] = useState(false)

  // Methods
  const toggleDrawer = (value) => {
    setOpen(value)
  }

  // Render
  return (
    <LeftPersistentDrawer
      open={open}
      handler={toggleDrawer}
      content={<Itinerary />}
    >
      <Calendar handler={toggleDrawer}></Calendar>
    </LeftPersistentDrawer>
  )
}

export default Dashboard
