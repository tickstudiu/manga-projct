export interface SupportedLanguage {
    name: string
    code: string
    alias: string
    flag: Image
}

export interface Image {
    src: string
    alt?: string
    name?: string
    default?: boolean
}