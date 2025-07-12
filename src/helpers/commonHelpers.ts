import { get, isEqual, keys } from 'lodash'
import { i18n } from '@/locales'

const { t } = i18n.global

/** Searches for a string in an array and generates a unique string that is not in the array.
 * @param name source string
 * @param arr search array
 * @return Unique string with postfix "(${number})", or the original string
 * @example
 * uniqName("Alex", ["Alex", "Bob", "Walter"]) // => "Alex (1)"
 * uniqName("Alex", ["Alex", "Alex (1)", "Walter"]) // => "Alex (2)"
 * uniqName("Alex", ["Mike", "Bob", "Walter"]) // => "Alex" */
export const uniqName = (name: string, arr: string[]) => {
  if (arr.find(i => i === name)) {
    let i = 1
    while (arr.find(i => i === `${name} (${i})`)) i++
    name += ` (${i})`
  }
  return name
}

/** Generates a random MAC address
 * @return format string 6C:4A:74:XX:XX:XX
 * @example
 * generateMac() // => "6C:4A:74:F8:F7:13" */
export const generateMac = () =>
  '6C:4A:74:XX:XX:XX'.replace(/X/g, () => '0123456789ABCDEF'.charAt(Math.floor(Math.random() * 16)))

/** Casts a boolean value to the string "Yes" | "No", respects the installed locale
 *
 * **NOTE:** Used for HTML display only.
 * @param val boolean
 * @return string "Yes" | "No"
 * @example
 * // locale = "de"
 * booleanTranslate(true) // => "oui"
 * booleanTranslate(false) // => "non"
 * // locale = "en"
 * booleanTranslate(true) // => "Yes"
 * booleanTranslate(false) // => "No" */
export const booleanTranslate = (val: boolean) => (val ? t('yes') : t('no'))

/** Updates an element in an array, or adds it if the element is not found.
 *
 * **NOTE:** Does not mutate the original array
 * @param arr array of objects
 * @param item element to add
 * @param key the key by which the object is searched for in the array
 * @return new array
 * @example
 * setArrItem([{id: 1, name: "Alex"}], {id: 2, name: "Bob"})
 * // => [{id: 1, name: "Mike"}, {id: 2, name: "Bob"}]
 *
 * setArrItem([{id: 1, name: "Alex"}, {id: 2, name: "Bob"}], {id: 1, name: "Mike"})
 * // => [{id: 1, name: "Mike"}, {id: 2, name: "Bob"}]
 *
 * setArrItem([{id: 1, name: "Alex"}, {id: 2, name: "Bob"}], {id: 1, name: "Mike"})
 * // => [{id: 1, name: "Mike"}, {id: 2, name: "Bob"}]
 * */
export const setArrItem = <T extends object>(arr: T[], item: T, key: string | number | symbol = 'id') => {
  const safeArr = [...arr]
  const existIndex = arr.findIndex(i => get(item, key) === get(i, key))
  if (existIndex === -1) safeArr.push(item)
  safeArr[existIndex] = item
  return safeArr
}

/** Calculates the closest number to the passed number from the array
 * @param arr array of numbers
 * @param val number to search
 * @return the closest number from the array to the number val
 * @example
 * nearestNumber([0, 10, 20], 3) // => 0
 * nearestNumber([0, 10, 20], 50) // => 20
 * nearestNumber([0, 10, 20], 15) // => 10 */
export const nearestNumber = (arr: number[], val: number) => {
  return arr.reduce((nearest, num) => (Math.abs(num - val) >= Math.abs(nearest - val) && nearest < num ? nearest : num))
}

/** Finds all numbers from zero to n that are divisible by the number divider without remainder
 * @param n maximum number
 * @param divider divider
 * @return array of integers
 * @example
 * test(9, 3) // => [3, 6, 9]
 * test(50, 10) // => [10, 20, 30, 40, 50]
 * test(25, 5) // => [5, 10, 15, 20, 25] */
export const divisibleNumbers = (n: number, divider: number) => {
  const numbers: number[] = []
  for (let i = 1; i <= n; i++) {
    if (i % divider === 0) numbers.push(i)
  }
  return numbers
}

/** Casts a string to a boolean value accordingly
 * @param v string = "True" | "true" | "false"
 * @return Returns boolean
 * @example
 * booleanString("true") // => true
 * booleanString("True") // => true
 * booleanString("false") // => false
 * booleanString("abrakadabra") // => false */
export const booleanString = (v: string) => v.toLowerCase() === 'true'

/** Compares objects by key values, returns an object with the difference
 *  @param a first object
 *  @param b the second object, the value by keys will be taken from it
 *  @return a new object that includes all keys whose values in the object are not equal
 *  @example
 * const a = {cat: 'meow', dog: 'wow-bow'}
 * const b = {cat: 'meow', dog: 'bark'}
 * differenceObj(a, b) // => {dog: 'bark'} */
export const differenceObj = <T extends Record<string, unknown>>(a: T, b: T) => {
  const changesObj: Partial<T> = {}

  const allKeys: (keyof T)[] = keys({ ...a, ...b })
  allKeys.forEach(key => (!isEqual(b[key], a[key]) ? (changesObj[key] = b[key]) : null))

  return changesObj
}

/** Copies text to the clipboard
 *  @param text text to copy
 *  @example
 *  copyToClipboard('test') // the text 'test' will be copied to the clipboard */
export const copyToClipboard = (text: string) => {
  try {
    return navigator.clipboard.writeText(text)
  } catch (err) {
    const $el = document.createElement('input')
    $el.style.position = 'absolute'
    $el.style.left = '-9999px'
    $el.setAttribute('readonly', '')
    $el.value = text
    document.body.appendChild($el)
    $el.select()
    document.execCommand('copy')
    document.body.removeChild($el)
  }
}

/** Calls the preventDefault method on the Event object.
 *
 *  **NOTE**: for ease of use in lodash compose
 *  @param e Event
 *  @returns . Event */
export const preventDefault = (e: Event) => {
  e.preventDefault()
  return e
}

/** Calls the stopPropagation method on the Event object.
 *
 * **NOTE**: for ease of use in lodash compose
 *  @param e Event
 *  @returns . Event */
export const stopPropagation = (e: Event) => {
  e.stopPropagation()
  return e
}

/** Checks that arg is not nullable
 *
 * **NOTE**: for ease of use in the array filter method
 *  @param arg
 *  @returns boolean */
export function isNotNullable<T>(arg: T): arg is NonNullable<T> {
  return arg != null
}
