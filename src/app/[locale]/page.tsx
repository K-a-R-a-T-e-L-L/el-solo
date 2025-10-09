import Layout from "../components/Layout";
import { getTranslations } from "../lib/i18n";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const tHeader = await getTranslations(locale, 'header');
  const tHome = await getTranslations(locale, 'home');
  const tAdvantages = await getTranslations(locale, 'advantages');
  const tServices = await getTranslations(locale, 'services');
  const tPortfolio = await getTranslations(locale, 'portfolio');
  const tContacts = await getTranslations(locale, 'contacts');
  const tFooter = await getTranslations(locale, 'footer');

  const t = { ...tHeader, ...tHome, ...tAdvantages, ...tServices, ...tPortfolio, ...tContacts, ...tFooter };

  return (
    <Layout t={t} />
  );
};

export async function generateStaticParams() {
  return [{ locale: "ru" }, { locale: "en" }];
};