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

// 一个新的reducer,theme reducer
function themeReducer (state, action = {}) {
  if (!state) {
    state = {
      themeColor: 'red',
    }
  }
  const {type, themeColor} = action
  let res
  switch (type) {
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

export default store
