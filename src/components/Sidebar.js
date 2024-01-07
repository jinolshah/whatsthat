'use client';

import Link from 'next/link';
import { TbBrandGoogleAnalytics, TbSettings, TbLogout } from "react-icons/tb";
import Logout from '@/components/buttons/Logout';
import { usePathname } from 'next/navigation';

export default function Sidebar({page, session}) {
    return (
        <>
            <label htmlFor='navCb' className='backdrop fixed inset-0 bg-black/80 z-10 hidden w-full h-full transition-all' />
            <aside className='pl-4 fixed -left-48 top-0 z-20 md:static transition-all'>
                <div className='sticky py-4 top-0'>
                    <div className='bg-white px-6 py-4 rounded-xl drop-shadow mb-4'>
                        <Link href={'/'} className='font-bold flex justify-center'>
                            <span>
                                wotit &gt;&gt;
                            </span>
                        </Link>
                    </div>
                    <div className='bg-white px-6 py-4 rounded-xl drop-shadow'>
                        <Link href={'/' + page ? page.uri : 'account'}
                                        target='_blank'>
                                    <div className="flex items-center justify-center px-2 font-bold 
                                                    hover:underline underline-offset-4 decoration-verdigris decoration-2">
                                        <span>&gt;&gt;</span>
                                        <span className='text-slate-300'>&nbsp;/&nbsp;</span>
                                        <span className='text-verdigris'>{page.uri ? page.uri : '     '}</span>
                                    </div>
                        </Link>
                    </div>
                    <div className='rounded-xl bg-white border-solid py-6 drop-shadow mt-4'>
                        <nav className='flex flex-col gap-10 mx-auto px-6 py-2'>
                            <Link href={'/account'} className={`flex flex-row items-center ${usePathname()==='/account' ? 'text-blush-400' : ''}`}>
                                <TbSettings className='w-5 h-5'/>
                                <span className='ml-2'>Settings</span>
                            </Link>
                            <Link href={'/analytics'} className={`flex flex-row items-center ${usePathname()==='/analytics' ? 'text-blush-400' : ''}`}>
                                <TbBrandGoogleAnalytics className='w-5 h-5'/>
                                <span className='ml-2'>Analytics</span>
                            </Link>
                            <Logout className='text-left flex flex-row items-center'>
                                <TbLogout className='w-5 h-5'/>
                                <span className='ml-2'>Logout</span>
                            </Logout>
                        </nav>
                    </div>
                </div>
            </aside>
        </>
    )
}

