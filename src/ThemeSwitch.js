import React, {Component} from 'react'
import PropTypes from 'prop-types'
// import { connect } from './react-redux'
import {connect} from 'react-redux'

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

// const mapStateToProps = ['themeColor']

const mapStateToProps = (state = {}) => {
  return {
    themeColor: state.themeColor
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSwitchColor: (color) => {
      dispatch({
        type: 'CHANGE_COLOR',
        themeColor: color
      })
    }
  }
}

ThemeSwitch = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)

export default ThemeSwitch