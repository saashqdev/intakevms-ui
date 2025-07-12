import { setArrItem } from '@helpers/commonHelpers'
import { ActionsStateMutationTypes } from '@/store/modules'
import type { KeysMatching } from '@/types'

import type { RootState } from './types'
import type { Action, Module } from 'vuex'
import { mapValues } from 'lodash'
import { store } from '@/store/store'
import type { State as ActionsState } from '@/store/modules/actionsState/state'

type ArrayElement<ArrayType> = ArrayType extends readonly (infer ElementType)[] ? ElementType : never

export const createAction = () => null

/** Returns a mutation that replaces the value in the state by key with the passed payload.
 *  @summary To quickly create a mutation where you need to replace the entire array with a new one.
 *  @key key in state object */
export const createMutation =
  <State extends RootState[keyof RootState], Key extends keyof State, Payload extends State[Key]>(key: Key) =>
  (state: State, payload: Payload) =>
    (state[key] = payload)

/** Returns a mutation that replaces/adds an object to an array in the state by key
 *  @summary To quickly create a mutation where you need to change/add an element to an array.
 *  @key key in state object
 *  @replaceBy the key in the object by which the search for a match will be performed */
export const createMutationSetArrItem =
  <
    State extends RootState[keyof RootState],
    Key extends KeysMatching<State, Array<object>>,
    Item extends ArrayElement<State[Key]>
  >(
    key: Key,
    replaceBy: 'id' | keyof Item = 'id'
  ) =>
  (state: State, item: Item) => {
    state[key] = setArrItem(state[key] as unknown as object[], item as object, replaceBy) as unknown as State[Key]
  }

/** Returns a mutation that removes an object from the array in the state by key
 *  @summary To quickly create a mutation where you need to remove an element from an array
 *  @key key in state object
 *  @filterBy the key in the object by which the filter will pass */
export const createMutationDeleteArrItem =
  <
    State extends RootState[keyof RootState],
    Key extends KeysMatching<State, Array<object>>,
    Item extends ArrayElement<State[Key]>,
    Value extends keyof Item
  >(
    key: Key,
    filterBy: 'id' | keyof Item = 'id'
  ) =>
  (state: State, value: Value) => {
    state[key] = (state[key] as unknown as Array<{ [key in typeof filterBy]: unknown }>).filter(
      i => i[filterBy] !== value
    ) as unknown as State[Key]
  }

/* eslint-disable @typescript-eslint/no-explicit-any */
/** Wraps module actions into a function that dispatches state to the store module actionsState
 *
 *  **NOTE:** When adding a new module to the store, do not forget to add the actions of the new module to the state of the module actionsState
 *
 *  @summary To track the execution status of actions
 *  @module store module */
export const wrapModuleActionsInState = <T extends Module<any, any>>(module: T): T => {
  return {
    ...module,
    actions: mapValues(module.actions, (v: Action<any, any>, k: keyof ActionsState) => {
      return async (...args: any) => {
        store.commit(ActionsStateMutationTypes.ACTION_INITIATE, k)

        try {
          // @ts-ignore
          const actionReturn = await v(...args)
          store.commit(ActionsStateMutationTypes.ACTION_SUCCESS, k)
          return actionReturn
        } catch (error) {
          // @ts-ignore
          store.commit(ActionsStateMutationTypes.ACTION_ERROR, { actionKey: k, error })
        }
      }
    }),
  }
}

export const pullItem = async <T extends { id: string; status?: string }>(
  initial: T,
  callback: (id: string) => Promise<{ data: T }>,
  mutation?: (i: T) => unknown
) => {
  const initialStatus = initial.status

  return new Promise(resolve => {
    let isFetching = false
    const interval = setInterval(async () => {
      if (isFetching) return
      isFetching = true
      const res = await callback(initial.id).catch(() => null)
      isFetching = false
      if (!res) {
        clearInterval(interval)
        return resolve(null)
      }
      if (!initialStatus || res.data.status !== initialStatus) {
        mutation?.(res.data)
        clearInterval(interval)
        resolve(res.data)
      }
    }, 3000)
  })
}
