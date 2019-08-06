import {
  Entry,
  ADD_ENTRY,
  DELETE_ENTRY,
  EntryActionTypes
} from './types'

export function addEntry (id: string, entry: Entry): EntryActionTypes {
  return {
    type: ADD_ENTRY,
    payload: { id, entry }
  }
}

export function deleteEntry (id: string): EntryActionTypes {
  return {
    type: DELETE_ENTRY,
    payload: { id }
  }
}
