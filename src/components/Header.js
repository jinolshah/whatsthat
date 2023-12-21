import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-white border-b flex justify-between p-6">
            <div className="flex gap-12">
                <Link href={'/'} className="text-base">WhatsThat</Link>
                <nav className="flex items-center gap-4 text-slate-500 text-base">
                    <Link href={'/about'}>About</Link>
                    <Link href={'/contact'}>Contact</Link>
                </nav>
            </div>
            <div className="flex items-center gap-4 text-slate-500 text-base">
                <Link href={'/login'}>Login</Link>
                <Link href={'/register'}>Register</Link>
            </div>
        </header>
    )
}