import { createStore } from 'redux'
import { reducer } from './reducer'

const store = createStore(reducer)

store.dispatch({type: 'RESTART_GAME'})

export default store

