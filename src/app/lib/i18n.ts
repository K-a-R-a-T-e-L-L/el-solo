export type Translations = {
    [key: string]: string
};

export async function getTranslations(locale: string, namespace: string) {
    try {
        const translations = await import(`../../../public/locales/${locale}/${namespace}.json`);
        return translations.default;
    } catch (error) {
        console.log('Translations', error);
        return {};
    };
};