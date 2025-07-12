import type { FormKitValidationRule } from '@formkit/validation'

const ipRegExp =
  /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/

export const ip: FormKitValidationRule = node => {
  const value = node.value
  if (['string', 'number', 'boolean'].includes(typeof value)) {
    return ipRegExp.test((value as string | number | boolean).toString())
  }
  return false
}
