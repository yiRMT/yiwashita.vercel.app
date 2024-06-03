import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import '@/styles/globals.scss'
import { I18nProviderClient } from '@/locales/client'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function LocaleLayout({
  params: { locale },
  children,
}: {
  params: { locale: string }
  children: React.ReactNode
}) {
  return (
    <html lang={locale}>
      <body>
        <I18nProviderClient locale={locale}>
          <Header />
          <div className="content">
            <div className="wrapper">{children}</div>
          </div>
          <Footer />
        </I18nProviderClient>
      </body>
    </html>
  )
}
