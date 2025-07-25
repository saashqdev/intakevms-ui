import { floor, round } from 'lodash'
import { i18n } from '@/locales'
import { nearestNumber } from '@helpers/commonHelpers'
import type { ArrayElement } from '@/types'
import { store } from '@/store'

const { t } = i18n.global as any

enum powMultiplier {
  'B' = 0,
  'K' = 1,
  'M' = 2,
  'G' = 3,
  'T' = 4,
}

enum notationMultiplier {
  'iec' = 1024,
  'si' = 1000,
}

let notation: 'si' | 'iec' = store.state.app.settings.sizeNotation
store.watch(
  s => s.app.settings.sizeNotation,
  v => (notation = v)
)

const units = {
  get 0() {
    return t(`sizes.full.${notation}.B`)
  },
  get 1() {
    return t(`sizes.short.${notation}.K`)
  },
  get 2() {
    return t(`sizes.short.${notation}.M`)
  },
  get 3() {
    return t(`sizes.short.${notation}.G`)
  },
  get 4() {
    return t(`sizes.short.${notation}.T`)
  },
} as const

/** Converts a number in bytes to a specific unit of measurement, taking into account the current locale.
 *
 * **NOTE:** Used for HTML display only.
 * @param bytes number in bytes
 * @param props additional options
 * @param props.precision rounding accuracy
 * @param props.exactUnit specific unit of measurement
 * @param props.withoutUnit display unit of measurement in the returned string
 * @return string with specified size
 * @example
 * // locale = "de"
 * bytesToSize(1000000000) // => "1 GB"
 * bytesToSize(32000000) // => "32 MB"
 * bytesToSize(5432342355430) // => "5.43 TB"
 * bytesToSize(5432342355430, {precision: 0}) // => "5 TB"
 * bytesToSize(5432342355430, {exactUnit: "G"}) // => "5432.34 GB"
 * bytesToSize(5432342355430, {withoutUnit: true}) // => "5.43"
 * // locale = 'en'
 * bytesToSize(1000000000) // => "1 GB"
 * bytesToSize(5432342355430) // => "5.43 TB" */
export function bytesToSize(
  bytes = 0,
  props?: { precision?: number; exactUnit?: keyof typeof powMultiplier; withoutUnit?: boolean }
) {
  const { precision = 2, exactUnit, withoutUnit } = props || {}
  let unit: string | undefined
  let num: number | undefined

  const val = Number(bytes)
  if (isNaN(val)) {
    console.error(new Error(`"${bytes}" is not a number`))
    return `${bytes}`
  }

  if (exactUnit) {
    unit = units[powMultiplier[exactUnit]]
    num = val / Math.pow(notationMultiplier[notation], powMultiplier[exactUnit])
  } else {
    let i = val ? floor(Math.log(bytes) / Math.log(notationMultiplier[notation])) : 0
    i = i > 4 ? 4 : i
    num = val / notationMultiplier[notation] ** i
    unit = units[i as unknown as keyof typeof units]
  }

  return `${floor(num, precision)}${withoutUnit ? '' : ` ${unit}`}`
}

/** Converts size to bytes
 * @param size size in bytes
 * @param unit unit of measurement
 * @return number in bytes
 * @example
 * sizeToBytes(4, "G") // => 4000000000
 * sizeToBytes(1.6, "T") // => 1600000000000
 * sizeToBytes(512, "M") // => 512000000 */
export function sizeToBytes(size: number, unit: keyof typeof powMultiplier) {
  return round(Math.pow(notationMultiplier[notation], powMultiplier[unit]) * size)
}

/** Returns the unit in which to display the number of bytes for easier reading.
 *
 * **NOTE:** Used to transfer to bytesToSize в props.exactUnit
 * @param bytes number in bytes
 * @param allow array of allowed units of measurement
 * @return string unit of measure
 * @example
 *  bytesToUnit(1600000000000) // => "T"
 *  bytesToUnit(1600000000000, ["M", "G"]) // => "G"
 *  bytesToUnit(1600, ["M", "G"]) // => "M"
 *  bytesToUnit(4000000000) // => "G" */
export function bytesToUnit<T extends (keyof typeof powMultiplier)[]>(bytes?: number, allow?: T): ArrayElement<T> {
  if (allow) {
    const multipliers = allow.map(i => powMultiplier[i]).sort()
    let i = floor(Math.log(bytes || 0) / Math.log(notationMultiplier[notation]))
    i = i > 4 ? 4 : i
    const nearest = nearestNumber(multipliers, i)
    return powMultiplier[nearest] as ArrayElement<T>
  }

  if (!bytes) return powMultiplier[0] as ArrayElement<T>

  let i = floor(Math.log(bytes) / Math.log(notationMultiplier[notation]))
  i = i > 4 ? 4 : i
  return powMultiplier[i] as ArrayElement<T>
}

/** Converts the size display unit to a readable string
 *
 * **NOTE:** Used for HTML display only.
 * @param unit unit of measurement
 * @return string with the converted unit of measurement
 * @example
 * // locale="de"
 * sizeUnitTranslate("M") // => "MB"
 * sizeUnitTranslate("G") // => "GB"
 * // locale="en"
 * sizeUnitTranslate("M") // => "MB"
 * sizeUnitTranslate("G") // => "GB" */
export function sizeUnitTranslate(unit: keyof typeof powMultiplier) {
  return units[powMultiplier[unit]]
}
