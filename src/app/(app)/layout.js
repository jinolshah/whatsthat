import { Inter } from 'next/font/google'
import '../globals.css'
import Sidebar from '@/components/Sidebar';
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Page } from "@/models/Page";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { FaBars } from 'react-icons/fa';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Wotit',
  description: 'Share Your Favorites',
}

export default async function AppLayout({ children }) {
  const session = await getServerSession(authOptions);
  mongoose.connect(process.env.MONGODB_URI);

  const page = await Page.findOne({owner: session?.user?.email});

  return (
    <html lang="en">
      <body className={inter.className} id='app'>
        <main className='md:flex min-h-screen md:max-w-6xl m-auto'>
          <label className='md:hidden flex fixed right-5 top-5 z-20 
                            rounded-full w-8 h-8 bg-white justify-center 
                            items-center drop-shadow cursor-pointer'
                  htmlFor='navCb'>
            <FaBars />
          </label>
          <input hidden id='navCb' type='checkbox'/>
          <Sidebar page={JSON.parse(JSON.stringify(page))} session={JSON.parse(JSON.stringify(session))}/>
          <div className='grow p-1 md:p-4'>
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}