import React, {  useState } from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'


import HomeDark from './HomeDark'
import HomeMain from './HomeMain'
import ComingSoon from './ComingSoon'
import Error from './Error'


import NavDrawer from './NavDrawer'



export default function Home() {





  const [home_dark, update_home] = useState(true);
  let home;



  if (home_dark === true) {
    home = <HomeDark update_home={update_home} d_state={home_dark} />;
  } else if (home_dark === false) {

    home = <HomeMain update_home={update_home} d_state={home_dark} />
  }


  return (
    <BrowserRouter>
      <div>
        <NavDrawer />
      </div>
      <Switch>
        <Route exact path='/bio'>
          <div>{home}</div>
        </Route>

        <Route exact path='/Projects'>
          <ComingSoon />
        </Route>
        <Route >
          <Error />
        </Route>
      </Switch>

    </BrowserRouter>

  )
}

