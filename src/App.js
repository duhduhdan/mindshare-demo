import React, { Component } from 'react'
import './App.css'
import activeColor from './redux/reducer'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'


import RowItem from './components/RowItem/RowItem'
import ControlPanel from './components/ControlPanel/ControlPanel'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {activeColor: 'red'}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log('hi');
  }

  renderRows() {
    let rows = []

    for (let i = 0; i < 10; i++) {
      rows.push(
        <RowItem
          index={i + 1}
          key={i}
          active
          color={this.state.activeColor}
          onClick={this.handleClick}
        />
      )
    }

    return rows
  }

  render() {
    const logger = createLogger()
    return (
      <Provider store={createStore(activeColor, applyMiddleware(logger))}>
        <section>
          <ControlPanel />
          {this.renderRows()}
        </section>
      </Provider>
    )
  }
}

export default App
