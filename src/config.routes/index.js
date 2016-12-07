import React from 'react'

import { MatchWithSubRoutes } from 'utils.routing'

import App from 'App'
import Landing from 'App/views/Landing'
import Success from 'App/views/Success'

const routesData = [
  {
    pattern: '/',
    component: App,
    routes: [
      {pattern: '/', component: Landing, exactly: true},
      {
        pattern: '/completed',
        component: (...props) =>
          <Landing {...{
            ...props,
            success: true
          }} />
      }
    ]
  }
]

const routes =
  <div>
    {routesData.map((route, i) =>
      <MatchWithSubRoutes {...{ ...route, key: i }} />
    )}
  </div>

export default routes
