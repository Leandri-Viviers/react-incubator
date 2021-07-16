import { Route, Switch } from 'react-router'
import CitySelect from './onboarding/CitySelect'
import TimeFormat from './onboarding/TimeFormat'
import UnitFormat from './onboarding/UnitFormat'
import Dashboard from './dashboard/Dashboard'

const Routes = () => {
  const routes = [
    {
      exact: true,
      path: '/onboarding',
      view: <CitySelect />,
    },
    {
      path: '/onboarding/time',
      view: <TimeFormat />,
    },
    {
      path: '/onboarding/unit',
      view: <UnitFormat />,
    },
    {
      path: '/dashboard',
      view: <Dashboard />,
    },
  ]

  const list = []

  routes.forEach((route, index) => {
    list.push(
      <Route key={index} exact={route.exact} path={route.path}>
        {route.view}
      </Route>,
    )
  })

  // Render
  return <Switch>{list}</Switch>
}

export default Routes
