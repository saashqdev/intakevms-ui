import { isJson } from '@helpers/jsonHelpers'
import type { GridLayout } from '@/modules/dashboard/components/DashboardGrid'
import type { State as DashboardState } from '@/store/modules/dashboard/state'

export type LocalStorage = {
  dashboard_grid?: GridLayout
  dashboard_grid_ts?: number
  dashboard_grid_settings?: DashboardState['gridSettings']
  token?: string
  refresh_token?: string
  ui_settings?: { theme?: 'dark' | 'light'; locale?: 'de' | 'en'; sizeNotation?: 'si' | 'iec' }
  tableColumns?: Record<string, Record<string, { visible?: boolean }>>
}

/** Returns a value from localStorage */
export function getLocalStorage<T extends keyof LocalStorage>(key: T): NonNullable<LocalStorage[T]> | null {
  const value = localStorage.getItem(key) as NonNullable<LocalStorage[T]>
  return isJson(value as string) ? JSON.parse(value as string) : value
}

/** Writes a value to localStorage */
export function setLocalStorage<T extends keyof LocalStorage>(key: T, value: LocalStorage[T] | undefined | null) {
  if (value == null) {
    return localStorage.removeItem(key)
  } else if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
    return localStorage.setItem(key, value.toString())
  }

  return localStorage.setItem(key, JSON.stringify(value))
}
