import { TypedMap } from '../immutable-helpers'
import { Map } from 'immutable'

export interface IEntry {
  name: string,
  body: string,
  createdAt: number,
  updatedAt: number
}

export type Entry = TypedMap<IEntry>

export type EntriesState = Map<string, Entry>

export const ADD_ENTRY = 'ADD_ENTRY'
export const DELETE_ENTRY = 'DELETE_ENTRY'

interface AddEntryAction {
  type: typeof ADD_ENTRY,
  payload: {
    id: string,
    entry: IEntry
  }
}

interface DeleteEntryAction {
  type: typeof DELETE_ENTRY,
  payload: {
    id: string
  }
}

export type EntryActionTypes = AddEntryAction | DeleteEntryAction
