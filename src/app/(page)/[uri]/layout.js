import { Inter } from 'next/font/google'
import '../../globals.css'

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
      <body className={inter.className} id='myPage'>
        <main className="h-full">
          <div className="md:p-6 h-full">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
