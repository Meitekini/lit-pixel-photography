import type { Metadata } from 'next'

import Banner from '../../components/shared/banner'
import Footer from '@/components/shared/footer'



export const metadata: Metadata = {
  title: 'Photography | Portfolio',
  description: 'Explore stunning photography and capture moments that matter',
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
    
        <div className="flex flex-col min-h-screen">
          {/* Navigation */}
          <Banner />

          {/* Main Content */}
          <main className="flex-grow">
            {children}
          </main>

          {/* Footer */}
         <Footer />
         
        </div>
    
  )
}
