import type { FormKitValidationRule } from '@formkit/validation'

const regexp = /^[a-zA-Z0-9-_]+$/

/** Skips only Latin letters in any case, numbers, underscores (_) and hyphens (-)
 *
 * @example
 * "TEST" // => true
 * "Test" // => true
 * "test" // => true
 * "Test123" // => true
 * "Test_123" // => true
 * "Test-123" // => true
 *
 * "TEST 123" // => false
 * "TEST__!@#" // => false
 * "GERMAN" // => false
 * */
export const login: FormKitValidationRule = node => {
  const value = node.value
  if (['string', 'number', 'boolean'].includes(typeof value))
    return regexp.test((value as string | number | boolean).toString())

  return false
}
