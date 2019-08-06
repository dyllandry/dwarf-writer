import { combineReducers } from 'redux'
import entriesReducer from './entry/reducers'

export const rootReducer = combineReducers({
  entries: entriesReducer
})

export type AppState = ReturnType <typeof rootReducer>
