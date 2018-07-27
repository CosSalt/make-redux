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
function stateChanger (state, action = {}) {
  const {type, color, text} = action
  if(!state) {
    state = {
      title: {
        text: 'React.js 小书',
        color: 'red',
      },
      content: {
        text: 'React.js 小书',
        color: 'blue',
      }
    }
  }
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

function createStore (reducer) {
  let state = null
  const listeners = []
  const subscribe = (listener) => listeners.push(listener)
  const getState = () => state
  const dispatch = (action) => {
    const oldState = state
    state = reducer(state, action) // 覆盖原对象
    listeners.forEach(listener => listener(oldState))
  }
  dispatch() // 初始化state
  return{getState, dispatch, subscribe}
}

const store = createStore(stateChanger)

store.subscribe((oldState) => renderApp(store.getState(), oldState)) // 更新数据后自动调用 renderApp 方法

renderApp(store.getState()) // 首次渲染页面

// 数据修改
store.dispatch({type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》'})
store.dispatch({type: 'UPDATE_TITLE_COLOR', color: 'blue'})

// renderApp(store.getState()) // 把新的数据渲染到页面上（不需要了）

// 一个新的reducer,theme reducer
function themeReducer (state, action = {}) {
  if (!state) {
    state = {
      themeName: 'Red Theme',
      themeColor: 'red',
    }
  }
  const {type, themeName, themeColor} = action
  let res
  switch (type) {
    case 'UPDATE_THEME_NAME':
      res = {
        ...state,
        themeName
      }
      break
    case 'UPDATE_THEME_COLOR':
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

const themeStore = createStore(themeReducer)