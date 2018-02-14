'use strict'

import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import Main from './components/Main.jsx'

render (
  <Provider>
    <Main />
  </Provider>,
  document.getElementById('main')
)