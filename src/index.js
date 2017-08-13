import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import AppView from 'views/AppView'

ReactDOM.render(
  <Router>
    <AppView>
      <Route exact path="/" component={AppView}/>
    </AppView>
  </Router>
, document.getElementById('root'))

registerServiceWorker()
