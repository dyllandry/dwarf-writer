import {
  EntriesState,
  EntryActionTypes,
  ADD_ENTRY,
  DELETE_ENTRY,
  Entry
} from './types'

import { Map, fromJS } from 'immutable'

const initialState: EntriesState = Map<string, Entry>()

export default function entriesReducer (
  state = initialState,
  action: EntryActionTypes
): EntriesState {
  switch (action.type) {
    case ADD_ENTRY:
      return state.set(action.payload.id, fromJS(action.payload.entry))

    case DELETE_ENTRY:
      return state.delete(action.payload.id)

    default:
      return state
  }
}
