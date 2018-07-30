import React,{Component} from 'react'
import PropTypes from 'prop-types'
// import {connect} from './react-redux'
import {connect} from 'react-redux'

class Header extends Component {
  static propTypes = {
    themeColor: PropTypes.string
  }

  render () {
    const {themeColor: color} = this.props
    const colorStyle = color ? {color} : null 
    return (
      <h1 style={colorStyle}> React.js 小书 </h1>
    )
  }
}

// const mapStateToProps = ['themeColor']
const mapStateToProps = (state = {}) => {
  return {
    themeColor: state.themeColor
  }
}

Header = connect(mapStateToProps)(Header)

export default Header