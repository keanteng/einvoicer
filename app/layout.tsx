import { Providers } from './providers';
import Footer from './components/navigation/footer';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'eInvoicer',
  description: 'eInvoicer is a simple invoicing app for eInvoice generation.',
  icons: {
    icon: '/favicon.ico',
  },
}
 

export default function RootLayout({

  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang = "en">
      <body>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}