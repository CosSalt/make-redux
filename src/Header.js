import React,{Component} from 'react'
import PropTypes from 'prop-types'

class Header extends Component {
  static contextTypes = {
    store: PropTypes.object
  }
  
  constructor () {
    super()
    this.state = {
      themeColor: ''
    }
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
      <h1 style={colorStyle}> React.js 小书 </h1>
    )
  }
}

export default Header