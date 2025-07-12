import { computed } from 'vue'
import type { LocaleOptions, RtlOptions } from 'vuetify'
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
import { createI18n, useI18n } from 'vue-i18n'

import { getLocalStorage } from '@helpers/localStorageHelpers'

import { en } from './en'
import { de } from './de'
import { pluralizationRules } from './plural'

type MessageSchema = typeof de

export * from './en'
export * from './de'

export const defaultLocale =
  getLocalStorage('ui_settings')?.locale || window.navigator.language.startsWith('de-') ? 'de' : 'en'

// regexp cyrillic [a-yao]
export const i18n = createI18n<[MessageSchema], 'de' | 'en', false>({
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
  globalInjection: true,
  messages: { en, de },
  pluralizationRules,
})

export const locale: LocaleOptions & RtlOptions = {
  // @ts-ignore
  adapter: createVueI18nAdapter({ i18n, useI18n }),
}

export const t = i18n.global.t

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const compT = (key: string, params?: any) => computed(() => t(key, params))
