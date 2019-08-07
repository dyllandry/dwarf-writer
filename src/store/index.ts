import entriesReducer from './entry/reducers'
import { Map } from 'immutable'

export const rootReducer = (state: Map<string, any> = Map(), action: any) => {
  return Map({
    entries: entriesReducer(state.get('entries'), action)
  })
}

export type AppState = ReturnType<typeof rootReducer>

export type AppState = ReturnType <typeof rootReducer>
