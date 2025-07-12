import { isArray } from 'lodash'
import type { FormKitValidationRule } from '@formkit/validation'

export const multipleOf: FormKitValidationRule = (node, arg = 0) => {
  const value = node.value

  if (isArray(value)) return value.length % arg === 0

  return true
}
