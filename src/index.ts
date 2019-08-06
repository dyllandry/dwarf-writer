/**
 * The webpack JavaScript output of this file is externally referenced in the
 * emitted dist/index.html file. Any code here will immediately execute on the
 * index page.
 */
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { rootReducer } from './store'
import { addEntry, deleteEntry } from './store/entry/actions'

const store = createStore(
  rootReducer,
  applyMiddleware(logger)
)

const now = Date.now()

const entry = {
  name: 'Test Entry',
  body: 'Test body.',
  createdAt: now,
  updatedAt: now
}

store.dispatch(addEntry('123', entry))
store.dispatch(deleteEntry('123'))
