export interface Entry {
  name: string,
  body: string,
  createdAt: number,
  updatedAt: number
}

export type EntriesState = {[key: string]: Entry}

export const ADD_ENTRY = 'ADD_ENTRY'
export const DELETE_ENTRY = 'DELETE_ENTRY'

interface AddEntryAction {
  type: typeof ADD_ENTRY,
  payload: {
    id: string,
    entry: Entry
  }
}

interface DeleteEntryAction {
  type: typeof DELETE_ENTRY,
  payload: {
    id: string
  }
}

export type EntryActionTypes = AddEntryAction | DeleteEntryAction
