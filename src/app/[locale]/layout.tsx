import "../globals.scss";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { siteMetadata } from "../lib/metadata";
import YMetrika from "../components/YMetrica";

export async function generateMetadata({ params }: Readonly<{ params: Promise<{ locale: string }> }>) {
  const locale: 'ru' | 'en' = (await params).locale as 'ru' | 'en';
  const meta = siteMetadata[locale];

  return {
    title: {
      default: meta.title,
      template: "%s | El Solo"
    },
    description: meta.description,
    keywords: [],
    authors: [
      { name: "El Solo" },
      { name: "K_a_R_a_T_e_L_L" }
    ],
    applicationName: "El Solo",
    openGraph: {
      title: meta.openGraph.title,
      description: meta.openGraph.description,
      url: `https://el-solo.space/${locale}`,
      siteName: "El Solo",
      locale: meta.openGraph.locale,
      type: "website",
      images: [
        {
          url: "/images/preview.png",
          width: 1200,
          height: 630,
          alt: meta.openGraph.alt
        }
      ]
    },
    alternates: {
      canonical: `https://el-solo.space/${locale}`
    },
    metadataBase: new URL("https://el-solo.space"),
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: '16x16', type: 'image/vnd.microsoft.icon' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
        { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
        { url: '/favicon-120x120.png', sizes: '120x120', type: 'image/png' },
      ],
      apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    }
  }
};

export default async function RootLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'El Solo',
    image: '/images/preview.png',
    url: `https://el-solo.space/${locale}`,
    telephone: '+79617160943',
    description: `${locale === 'ru' ? 'Полный цикл веб-разработки и digital-услуг.' : 'A full cycle of web development and digital services.'}`,
    sameAs: [
      'https://t.me/K_a_R_a_T_e_L_L',
      'https://github.com/K-a-R-a-T-e-L-L',
      'https://vk.com/k_a_r_a_t_e_l_l',
      'mailto:kirillcuhorukov6@gmail.com',
      'https://wa.me/89617160943',
      'tel:8-961-716-09-43'
    ]
  };

  return (
    <html lang={locale}>
      <head>
        <link rel="manifest" href={`/site_${locale}.webmanifest`} />
        <link rel="alternate" hrefLang="ru" href="https://el-solo.space/ru" />
        <link rel="alternate" hrefLang="en" href="https://el-solo.space/en" />
        <link rel="alternate" hrefLang="x-default" href="https://el-solo.space/ru" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className={`antialiased`}>
        <YMetrika/>
        <LanguageSwitcher currentLocale={locale} />
        {children}
      </body>
    </html>
  );
};
