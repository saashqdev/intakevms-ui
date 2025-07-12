import type { FormKitValidationRule } from '@formkit/validation'

const REGEXP_UPPER = /^[A-Z0-9_ ]+$/
const REGEXP = /^[a-zA-Z0-9_ ]+$/

/** Skips only Latin letters, numbers, spaces and underscores _
 *
 * @example
 * "test" // => true
 * "TEST123" // => true
 * "Test_123" // => true
 *
 * "TEST 123" // => false
 * "Test__!@#" // => false
 * "German" // => false
 * */
export const name: FormKitValidationRule = node => {
  const value = node.value
  if (['string', 'number', 'boolean'].includes(typeof value))
    return REGEXP.test((value as string | number | boolean).toString())

  return false
}

/** Skips only uppercase Latin letters, numbers, spaces and underscores _
 *
 * @example
 * "TEST" // => true
 * "TEST123" // => true
 * "TEST_123" // => true
 *
 * "TEST 123" // => false
 * "TEST__!@#" // => false
 * "GERMAN" // => false
 * "lowerCase" // => false
 * */
export const nameUpper: FormKitValidationRule = node => {
  const value = node.value
  if (['string', 'number', 'boolean'].includes(typeof value))
    return REGEXP_UPPER.test((value as string | number | boolean).toString())

  return false
}
