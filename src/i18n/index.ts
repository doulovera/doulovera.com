import english from './en.json'
import spanish from './es.json'

const LANG = {
	ENGLISH: 'en',
	SPANISH: 'es',
}

export const LANGS = Object.values(LANG)

export const getI18N = ({
	currentLocale = 'en',
}: {
	currentLocale: string | undefined
}) => {
	if (currentLocale === LANG.SPANISH) return spanish
	return english
}