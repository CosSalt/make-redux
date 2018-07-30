import React,{Component} from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from '../containers/ThemeSwitch'

class Content extends Component {
  static propTypes = {
    themeColor: PropTypes.string
  }

  render () {
    const {themeColor: color} = this.props
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