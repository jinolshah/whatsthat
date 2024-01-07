import { Inter } from 'next/font/google'
import '../globals.css'

import Header from '@/components/Header'

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route.js"



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Wotit',
  description: 'Share Your Favorites',
}

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  
  return (
    <html lang="en">
      <body className={inter.className} id='default'>
        <main>
          <Header session={session}/>
          <div className="p-6 sm:max-w-6xl mx-auto h-full">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
