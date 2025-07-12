import type { FormKitValidationRule } from '@formkit/validation'

const macRegExp = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/

export const mac: FormKitValidationRule = node => {
  const value = node.value
  if (['string', 'number', 'boolean'].includes(typeof value)) {
    return macRegExp.test((value as string | number | boolean).toString())
  }
  return false
}
