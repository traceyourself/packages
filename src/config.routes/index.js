import React from 'react'

import { MatchWithSubRoutes } from 'utils.routing'

import App from 'App'
import Landing from 'App/views/Landing'

const routesData = [
  {pattern: '/', component: App, routes: [
    {pattern: '/', component: Landing}
  ]}
]

const routes =
  <div>
    {routesData.map((route, i) =>
      <MatchWithSubRoutes {...{ ...route, key: i }} />
    )}
  </div>

export default routes
