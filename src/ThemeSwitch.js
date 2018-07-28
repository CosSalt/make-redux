import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ThemeSwitch extends Component {
  static contextTypes = {
    store: PropTypes.object
  }

  constructor () {
    super()
    this.state = {themeColor: ''}
  }

  componentWillMount () {
    this._updateThemeColor()
    const { store } = this.context
    store.subscribe(() => this._updateThemeColor())
  }

  _updateThemeColor () {
    const {store} = this.context
    const state = store.getState() || {}
    const {themeColor} = state
    this.setState({themeColor})
  }

  handleSwitchColor (color) {
    const {store} = this.context
    store.dispatch({
      type: 'CHANGE_COLOR',
      themeColor: color
    })
  }

  render () {
    const {themeColor: color} = this.state
    const colorStyle = color ? {color} : null 
    return (
      <div>
        <button style={colorStyle} onClick={()=>this.handleSwitchColor('red')}>Red</button>
        <button style={colorStyle} onClick={()=>this.handleSwitchColor('blue')}>Blue</button>
      </div>
    )
  }
}

export default ThemeSwitch