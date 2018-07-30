import {connect} from 'react-redux'
import Header from '../components/Header'

const mapStateToProps = (state = {}) => {
  return {
    themeColor: state.themeColor
  }
}

const HeaderContainer = connect(mapStateToProps)(Header)
export default HeaderContainer