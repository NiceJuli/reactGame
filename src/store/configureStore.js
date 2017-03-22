import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import * as reducers from '../reducers'

const reducer = combineReducers(reducers)

const initialState = {
  deskFirst: [],
  deskSecond: [],
  stateGame: 'default'
}

export default function configureStore() {
  const store = createStore(reducer, initialState, applyMiddleware(logger()))

  return store
}