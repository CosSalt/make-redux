import Content from '../components/Content'
import {connect} from 'react-redux'

const mapStateToProps = (state = {}) => {
  return {
    themeColor: state.themeColor
  }
}

// 给 ThemeSwitch 使用
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

const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content) 

export default ContentContainer