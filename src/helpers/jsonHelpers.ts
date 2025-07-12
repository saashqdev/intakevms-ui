/** Checks if a string is valid JSON
 * @param str string to check
 * @return Returns boolean
 * @example
 * const json = JSON.stringify({test: "123"})
 * isJson(json) // => true
 *
 * isJson('{"test":"123"}') // => true
 * isJson('1231231233') // => false
 * */
export function isJson(str: string | null | undefined) {
  if (!str) return false

  try {
    JSON.parse(str)
  } catch (e) {
    return false
  }
  return true
}
