import entriesReducer from './entry/reducers'
import localforage from 'localforage'
import { Map, fromJS } from 'immutable'

export const rootReducer = (state: Map<string, any> = Map(), action: any) => {
  return Map({
    entries: entriesReducer(state.get('entries'), action)
  })
}

export type AppState = ReturnType<typeof rootReducer>

export async function saveToPersistent (state: AppState) {
  await localforage.setItem('state', state.toJS())
}

export async function loadFromPersistent (): Promise<AppState> {
  return fromJS(await localforage.getItem('state')) || undefined
}

export async function clearPersistant (): Promise<void> {
  await localforage.clear()
}
