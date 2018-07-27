// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// // import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// // registerServiceWorker();

const appState = {
  title: {
    text: 'React.js 小书',
    color: 'red',
  },
  content: {
    text: 'React.js 小书',
    color: 'blue',
  }
}

function renderApp (appState) {
  renderTitle(appState.title)
  renderContent(appState.content)
}

function renderTitle (title) {
  const {text, color} = title
  const titleDOM = document.getElementById('title')
  titleDOM.innerHTML = text
  titleDOM.style.color = color
}

function renderContent (content) {
  const contentDOM = document.getElementById('content')
  const {text, color} = content
  contentDOM.innerHTML = text
  contentDOM.style.color = color
}

// 修改数据入口（所有的数据的修改必须通过此函数）
function stateChanger (action) {
  const {type, color, text} = action
  switch (type) {
    case 'UPDATE_TITLE_TEXT':
      appState.title.text = text
      break
    case 'UPDATE_TITLE_COLOR':
      appState.title.color = color
      break
    default:
      break
  }
}

function createStore (state, stateChanger) {
  const getState = () => state
  const dispatch = (action) => stateChanger(state, action)
  return{getState, dispatch}
}

const store = createStore(appState, stateChanger)
renderApp(store.getState()) // 首次渲染页面

// 数据修改
store.dispatch({type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》'})
store.dispatch({type: 'UPDATE_TITLE_COLOR', color: 'blue'})

renderApp(store.getState()) // 把新的数据渲染到页面上