import React, {Component} from 'react'
import PropTypes from 'prop-types'

const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
  class Connect extends Component {
    static contextTypes = {
      store: PropTypes.object
    }

    constructor () {
      super()
      this.state = {allProps: {}}
    }

    componentWillMount () {
      const {store} = this.context
      this._updateProps()
      store.subscribe(() => this._updateProps())
    }

    _updateProps () {
      // let stateProps = mapStateToProps(store.getState(), this.props) // 额外传入 props，让获取数据更加灵活方便
      const stateProps = this._getMapStateProps(this.props)
      const dispatchProps = this._getMapDispatchToProps()
      this.setState({
        allProps: { // 整合普通的 props 和从 state 生成的 props
          ...stateProps,
          ...dispatchProps,
          ...this.props
        }
      })
    }

    _getMapDispatchToProps() {
      const {store} = this.context
      let res = {}
      const dispatchProps = mapDispatchToProps
      if (dispatchProps) {
        res = dispatchProps(store.dispatch, this.props)
      }
      return res
    }

    _getMapStateProps (...args) {
      const {store} = this.context
      const state = store.getState()
      const mapState = mapStateToProps // 可谓对象 数组 函数
      const mapStateType = typeof mapState
      let res = {}
      if (Array.isArray(mapState)) {
        mapState.forEach(key => {
          res[key] = state[key]
        })
      } else if ( mapStateType === 'object' && mapStateType) {
        for(let [key, val] of Object.entries(mapStateType)) {
          if(val) {
            res[val] = state[key]
          }
        }
      } else if (mapStateType === 'function') {
        res = mapState(state, ...args)
      }
      return res
    }

    render () {
      const {allProps} = this.state
      return <WrappedComponent {...allProps} {...this.props}/>
    }
  }

  return Connect
}

class Provider extends Component {
  static propTypes = {
    store: PropTypes.object,
    children: PropTypes.any
  }

  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext () {
    return {
      store: this.props.store
    }
  }

  render () {
    const {children} = this.props
    return (
      <div>{children}</div>
    )
  }

}

export { connect, Provider }