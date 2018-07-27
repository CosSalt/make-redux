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

function renderApp (appState, oldAppState = {}) {
  if(appState === oldAppState) return
  renderTitle(appState.title, oldAppState.title)
  renderContent(appState.content, oldAppState.content)
}

function renderTitle (title, oldTitle) {
  if(title === oldTitle) return
  const {text, color} = title
  const titleDOM = document.getElementById('title')
  titleDOM.innerHTML = text
  titleDOM.style.color = color
}

function renderContent (content, oldContent) {
  if(content === oldContent) return
  const contentDOM = document.getElementById('content')
  const {text, color} = content
  contentDOM.innerHTML = text
  contentDOM.style.color = color
}

// 修改数据入口（所有的数据的修改必须通过此函数）
function stateChanger (state, action) {
  const {type, color, text} = action
  let res
  switch (type) {
    case 'UPDATE_TITLE_TEXT':
      res = {
        ...state,
        title:{
          ...state.title,
          text
        }
      }
      break
    case 'UPDATE_TITLE_COLOR':
      res = {
        ...state,
        title:{
          ...state.title,
          color
        }
      }
      break
    default:
      res = state
      break
  }
  return res
}

function createStore (state, stateChanger) {
  const listeners = []
  const subscribe = (listener) => listeners.push(listener)
  const getState = () => state
  const dispatch = (action) => {
    const oldState = state
    state = stateChanger(state, action)
    listeners.forEach(listener => listener(oldState))
  }
  return{getState, dispatch, subscribe}
}

const store = createStore(appState, stateChanger)

store.subscribe((oldState) => renderApp(store.getState(), oldState)) // 更新数据后自动调用 renderApp 方法

renderApp(store.getState()) // 首次渲染页面

// 数据修改
store.dispatch({type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》'})
store.dispatch({type: 'UPDATE_TITLE_COLOR', color: 'blue'})

// renderApp(store.getState()) // 把新的数据渲染到页面上（不需要了）