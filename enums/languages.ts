import { SupportedLanguage } from '@/types/languages'

export const SupportedLanguages: SupportedLanguage[] = [
    {
        name: 'English',
        code: 'en',
        alias: 'EN',
        flag: {
            src: '/img/flag/rounded/uk.svg',
            alt: 'England flag',
            default: true
        }
    },
    {
        name: 'Thai',
        code: 'th',
        alias: 'TH',
        flag: {
            src: '/img/flag/rounded/th.svg',
            alt: 'Thai flag',
            default: true
        }
    }
]

export default {}