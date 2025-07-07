import type { Metadata } from 'next'
import { Inter, Poppins, Open_Sans } from 'next/font/google'
import Image from 'next/image'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MoonTree IT Support Services',
  description: 'Professional IT support and technology consulting services for businesses. We help organizations optimize their technology infrastructure and digital transformation.',
  keywords: 'IT support, technology consulting, digital transformation, business technology, IT services',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} ${openSans.variable} font-sans`}>
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <nav className="container mx-auto container-padding py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Image src="/logo.png" alt="MoonTree Logo" width={168} height={40} />
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="#home" className="text-secondary-600 hover:text-primary-600 transition-colors">Home</a>
                <a href="#services" className="text-secondary-600 hover:text-primary-600 transition-colors">Services</a>
                <a href="#about" className="text-secondary-600 hover:text-primary-600 transition-colors">About</a>
                <a href="#contact" className="text-secondary-600 hover:text-primary-600 transition-colors">Contact</a>
              </div>
              <div className="md:hidden">
                <button className="text-secondary-600 hover:text-primary-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
        </header>
        {children}
        <footer className="bg-secondary-900 text-white py-12">
          <div className="container mx-auto container-padding">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">M</span>
                  </div>
                  <h3 className="text-xl font-bold font-heading">MoonTree</h3>
                </div>
                <p className="text-secondary-400 font-body">
                  Professional IT support and technology consulting services for businesses of all sizes.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 font-heading">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#home" className="text-secondary-400 hover:text-white transition-colors">Home</a></li>
                  <li><a href="#services" className="text-secondary-400 hover:text-white transition-colors">Services</a></li>
                  <li><a href="#about" className="text-secondary-400 hover:text-white transition-colors">About</a></li>
                  <li><a href="#contact" className="text-secondary-400 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 font-heading">Contact Info</h4>
                                  <ul className="space-y-2 text-secondary-400">
                    <li>Email: wyl0201@gmail.com</li>
                    <li>Address: 144 #12-01 Robinsons Square<br />Robinson Road Singapore 068908</li>
                  </ul>
              </div>

            </div>
            <div className="border-t border-secondary-800 mt-8 pt-8 text-center text-secondary-400">
              <p>&copy; 2024 MoonTree International PTE. Ltd. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 