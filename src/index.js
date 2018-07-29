import React,{Component} from 'react';
import ReactDOM from 'react-dom';
// import App from './app'
// import PropTypes from 'prop-types'
import Header from './Header'
import Content from './Content'
import store from './store'
import {Provider} from './react-redux'

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

