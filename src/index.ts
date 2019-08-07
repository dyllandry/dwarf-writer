/**
 * The webpack JavaScript output of this file is externally referenced in the
 * emitted dist/index.html file. Any code here will immediately execute on the
 * index page.
 */
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import logger from 'redux-logger'
import { rootReducer } from './store'
import { addEntry, deleteEntry } from './store/entry/actions'

const loggerForImmutables = createLogger({
  stateTransformer: (state) => {
    return state.toJS()
  }
})

;(async () => {

  const store = createStore(
    rootReducer,
    applyMiddleware(loggerForImmutables)
  )

  const now = Date.now()

  const entry = {
    name: 'Test Entry',
    body: 'Test body.',
    createdAt: now,
    updatedAt: now
  }

  const randomId = Math.floor(Math.random()*1000).toString()
  store.dispatch(addEntry(randomId, entry))

store.dispatch(addEntry('123', entry))
store.dispatch(deleteEntry('123'))
})()
