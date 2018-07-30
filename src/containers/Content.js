import Content from '../components/Content'
import {connect} from 'react-redux'

const mapStateToProps = (state = {}) => {
  return {
    themeColor: state.themeColor
  }
}

const ContentContainer = connect(mapStateToProps)(Content) 

export default ContentContainer