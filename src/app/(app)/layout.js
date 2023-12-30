import { Inter } from 'next/font/google'
import '../globals.css'
import Sidebar from '@/components/Sidebar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function AppLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} id='app'>
        <main className='flex min-h-screen'>
          <Sidebar />
          <div className='grow p-4'>
            <div className="bg-white rounded-xl drop-shadow p-4">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}