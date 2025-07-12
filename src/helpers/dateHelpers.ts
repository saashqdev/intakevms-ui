import { fromUnixTime, format, parseISO } from 'date-fns'

/** Formats the date
 *
 * **NOTE:** Used for HTML display only.
 *
 * **NOTE_2:** when passing unixTimestamp in options you need to specify the parameter from: 'unix'
 * @param date date in format Date | ISO string | timestamp | unixTimestamp
 * @param options formatting options
 * @return formatted date string
 * @example
 * formatDate(new Date()) // => "05.06.23 13:32:18"
 * formatDate(1685961138174) // => "05.06.23 13:32:18"
 * formatDate(1685961138, {from: "unix"}) // => "05.06.23 13:32:18"
 * formatDate("2023-06-05T10:32:18.174Z") // => "05.06.23 13:32:18" */
export function formatDate(date?: Date | string | number, options?: { from: 'unix' }) {
  if (date == null) return ''

  if (options?.from === 'unix') date = fromUnixTime(Number(date))
  else if (typeof date === 'string') date = parseISO(String(date))

  try {
    return format(date as Date | number, 'dd.LL.yy k:mm:ss')
  } catch {
    return ''
  }
}
