'use client';
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Header() {
    const [nav, setNav] = useState(false);

    return (
        <header className="bg-white">
            <div className="flex flex-col sm:max-w-6xl p-6 m-auto">
                <div className="flex flex-row justify-between">
                    {/* logo */}
                    <Link href={'/'} className="text-xl text-black_olive font-bold whitespace-nowrap">wotit &gt;&gt;</Link>

                    {/* big nav */}
                    <nav className="hidden sm:flex items-center gap-6 text-black_olive">
                        <Link href={'/about'}>About</Link>
                        <Link href={'/contact'}>Contact</Link>
                        <Link href={'/login'}>Sign In</Link>
                        <Link href={'/register'}>Register</Link>
                    </nav>

                    {/* small nav */}
                    <div
                        onClick={() => setNav(!nav)}
                        className="cursor-pointer sm:hidden flex items-center text-black_olive"
                    >
                        {nav ? <FaTimes/> : <FaBars/>}
                    </div>
                </div>
                
                {/* click menu */}
                {nav && (
                    <div className="bg-olivine-900 rounded-lg p-4 mt-4">
                        <ul className="flex flex-col justify-center items-center w-full space-y-4 text-black_olive">
                            <Link href={'/about'}>About</Link>
                            <Link href={'/contact'}>Contact</Link>
                            <Link href={'/login'}>Sign In</Link>
                            <Link href={'/register'}>Register</Link>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
}