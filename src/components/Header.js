import React,{Component} from 'react'
import PropTypes from 'prop-types'

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

export default Header