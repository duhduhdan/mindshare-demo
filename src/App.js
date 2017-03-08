import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'

import './App.css'
import activeColor from './redux/reducer'

import Row from './components/Row/Row'
import ControlPanel from './components/ControlPanel/ControlPanel'

function renderRows() {
  let rows = []

  for (let i = 0; i < 10; i++) {
    rows.push(<Row index={i + 1} key={i} />)
  }

  return rows
}

const logger = createLogger()

const App = () => (
  <Provider store={createStore(activeColor, applyMiddleware(logger))}>
    <section className="mindshare">
      <h1>Mastermind</h1>
      <ControlPanel />
      {renderRows()}
    </section>
  </Provider>
)

export default App
