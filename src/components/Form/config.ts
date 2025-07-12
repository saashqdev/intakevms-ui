import { defaultConfig, plugin } from '@formkit/vue'
import { de as defaultDe, en as defaultEn } from '@formkit/i18n'
import type { FormKitLocale } from '@formkit/i18n'

import { de, en, defaultLocale } from '@/locales'
import { select, multiselect, checkbox, radio, table, custom, file, text, textarea, number, size, date } from './fields'
import { ip, mac, uniq, multipleOf, name, login } from './validations'

const inputs = {
  select,
  multiselect,
  checkbox,
  radio,
  table,
  custom,
  file,
  text,
  textarea,
  number,
  size,
  date,
} as any

export const rules = { ip, mac, uniq, multipleOf, name, login }

export const config = defaultConfig({
  rules,
  inputs,
  locales: { de: defaultDe, en: defaultEn },
  locale: defaultLocale,
  messages: {
    en: en.formkit as unknown as Partial<FormKitLocale>,
    de: de.formkit as unknown as Partial<FormKitLocale>,
  },
})

export const form = [plugin, config]
