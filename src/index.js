import React,{Component} from 'react';
import ReactDOM from 'react-dom';
// import App from './app'
// import PropTypes from 'prop-types'
import Header from './containers/Header'
import Content from './containers/Content'
// import store from './store'
// import {Provider} from './react-redux'
import {createStore} from 'redux'
import {Provider} from 'react-redux'


const themeReducer = (state, action={}) => {
  if(!state) {
    return {
      themeColor: 'red'
    }
  }
  let res
  const {type, themeColor} = action
  switch(type) {
    case 'CHANGE_COLOR':
      res = {
        ...state,
        themeColor
      }
      break
    default:
      res = state
      break
  }
  return res
}

const store = createStore(themeReducer)

class Index extends Component {
  render () {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}



ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
)

