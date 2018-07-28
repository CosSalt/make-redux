import React,{Component} from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'

class Content extends Component {
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

  render () {
    const {themeColor: color} = this.state
    const colorStyle = color ? {color} : null 
    return (
      <div>
        <p style={colorStyle}>React.js 小书内容</p>
        <ThemeSwitch />
      </div>
    )
  }
}

export default Content