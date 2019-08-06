import {
  EntriesState,
  EntryActionTypes,
  ADD_ENTRY,
  DELETE_ENTRY
} from './types'

const initialState: EntriesState = {}

export default function entriesReducer (
  state = initialState,
  action: EntryActionTypes
): EntriesState {
  switch (action.type) {
    case ADD_ENTRY:
      return {
        ...state,
        [action.payload.id]: action.payload.entry
      }

    case DELETE_ENTRY:
      const { [action.payload.id]: deleted, ...rest } = state
      return { ...rest }

    default:
      return state
  }
}
