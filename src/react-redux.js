import React, {Component} from 'react'
import PropTypes from 'prop-types'

const connect = (mapStateToProps) => (WrappedComponent) => {
  class Connect extends Component {
    static contextTypes = {
      store: PropTypes.object
    }

    _getMapStateProps () {
      const {store} = this.context
      const state = store.getState()
      const mapState = mapStateToProps
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
        res = mapState(state)
      }
      return res
    }

    render () {
      const stateProps = this._getMapStateProps()
      return <WrappedComponent {...stateProps} {...this.props}/>
    }
  }

  return Connect
}

export { connect }