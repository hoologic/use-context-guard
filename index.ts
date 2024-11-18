import { Context, useContext } from 'react'

// hooks

export const useContextGuard = <T>(context: Context<T>): Exclude<T, null> => {
  const localContext = useContext(context)

  if (localContext === null) {
    throw new Error('Context must be used within its provider')
  }

  return localContext as Exclude<T, null>
}
