import type { AxiosError } from 'axios'
import { chain, cloneDeep, values } from 'lodash'

import { AppActionTypes } from '../app/actionTypes'
import { DashboardActionTypes } from '../dashboard/actionTypes'
import { DevicesActionTypes } from '../devices/actionTypes'
import { VirtualizationActionTypes } from '../virtualization/actionTypes'
import { StorageActionTypes } from '../storage/actionTypes'
import { MonitoringActionTypes } from '../monitoring/actionTypes'
import { BlockDevicesActionTypes } from '@/store/modules/blockDevices/actionTypes'

type AllActionTypes =
  | AppActionTypes
  | DashboardActionTypes
  | DevicesActionTypes
  | VirtualizationActionTypes
  | StorageActionTypes
  | MonitoringActionTypes
  | BlockDevicesActionTypes

const unionActionTypes = [
  AppActionTypes,
  DashboardActionTypes,
  DevicesActionTypes,
  VirtualizationActionTypes,
  StorageActionTypes,
  MonitoringActionTypes,
  BlockDevicesActionTypes,
]

/**
 * isUninitialized - the value true indicates that the action has not been dispatched yet
 * isError - true indicates that the last call to the action failed
 * isSuccess - a value of true indicates that the last call to the action completed successfully
 * isInitializing - A value of true indicates that the action is currently being executed for the first time.
 *             This will be true for the first dispatch, but not for subsequent dispatches.
 * isDispatching - A value of true indicates that the action is currently executing.
 *              This will be true for both the first dispatch and subsequent ones.
 * error - error if the last dispatch ended in error
 * timestamp - timestamp last action dispatch that ended successfully
 * */
export type ActionStateType = {
  isUninitialized: boolean
  isError: boolean
  isSuccess: boolean
  isInitializing: boolean
  isDispatching: boolean
  error: AxiosError | Error | null
  timestamp: number | null
}

export const defaultActionState: ActionStateType = {
  isUninitialized: true,
  isError: false,
  isSuccess: false,
  isInitializing: false,
  isDispatching: false,
  error: null,
  timestamp: null,
}

export type State = {
  [key in AllActionTypes]: ActionStateType
}

export const state: State = chain(unionActionTypes)
  .flatMap(values)
  .map(key => [key, cloneDeep(defaultActionState)])
  .fromPairs()
  .value() as State
