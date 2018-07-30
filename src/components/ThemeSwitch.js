import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ThemeSwitch extends Component {
  static propTypes = {
    themeColor: PropTypes.string,
    onSwitchColor: PropTypes.func
  }

  handleSwitchColor (color) {
    const {onSwitchColor} = this.props
    if(onSwitchColor) {
      onSwitchColor(color)
    }
  }

  render () {
    const {themeColor: color} = this.props
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