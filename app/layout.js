import { Poppins } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'

const poppins = Poppins({ subsets: ['latin'], weight: ["300", "400", "500", "600", "700", "800", "900"] })

export const metadata = {
  title: 'Portfolio - Mihajlo Nikolić',
  description: 'My personal portfolio website.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} scrollbar-mini`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
