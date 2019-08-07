/**
 * The webpack JavaScript output of this file is externally referenced in the
 * emitted dist/index.html file. Any code here will immediately execute on the
 * index page.
 */
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { rootReducer, loadFromPersistent, saveToPersistent } from './store'
import { addEntry } from './store/entry/actions'

const loggerForImmutables = createLogger({
  stateTransformer: (state) => {
    return state.toJS()
  }
})

;(async () => {

  const store = createStore(
    rootReducer,
    await loadFromPersistent(),
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

  const state = store.getState()
  await saveToPersistent(state)
})()
