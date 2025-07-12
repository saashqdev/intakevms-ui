import type { PluralizationRules } from '@intlify/core-base'

export const pluralizationRules: PluralizationRules = {
  /** @param choice {number} selection index passed in $tc: `$tc('path.to.rule', choiceIndex)`
   *  @param choicesLength {number} total number of available options
   *  @returns final index for selecting the corresponding word variant */
  ru: function (choice, choicesLength) {
    if (choice === 0) return 0

    const teen = choice > 10 && choice < 20
    const endsWithOne = choice % 10 === 1

    if (choicesLength < 4) return !teen && endsWithOne ? 1 : 2
    if (!teen && endsWithOne) return 1
    if (!teen && choice % 10 >= 2 && choice % 10 <= 4) return 2

    return choicesLength < 4 ? 2 : 3
  },
}
