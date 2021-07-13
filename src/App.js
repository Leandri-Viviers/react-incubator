// Components
import Navbar from './components/Navbar'
import CitySetup from './components/CitySetup'
import TimeFormat from './components/onboarding/TimeFormat'
// Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Navbar title="Guidebook.io"></Navbar>
      <Switch>
        <Route path="/onboarding/time">
          <TimeFormat />
        </Route>
        <Route path="/onboarding">
          <CitySetup />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
