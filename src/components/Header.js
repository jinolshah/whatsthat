'use client';

import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";
import {signOut} from "next-auth/react";

export default function Header(props) {
    const [nav, setNav] = useState(false);

    return (
        <header className="bg-white">
            <div className="flex flex-col sm:max-w-6xl p-6 m-auto">
                <div className="flex flex-row justify-between items-center">
                    {/* logo */}
                    <Link href={'/'} className="text-xl text-black_olive font-bold whitespace-nowrap">wotit &gt;&gt;</Link>

                    {/* big nav */}
                    <nav className="hidden sm:block">
                        <ul className="flex flex-row items-center text-black_olive gap-6">
                                <li>
                                    <Link href={'/about'}>About</Link>
                                </li>
                                <li>
                                    <Link href={'/contact'}>Contact</Link>
                                </li>
                                {
                                    !!props.session ? (
                                        <>
                                            <li className="loginRef bg-blush-800 px-2 rounded-lg">
                                                <Link href={'/account'}>Welcome, {props.session.user.name}</Link>
                                            </li>
                                            <button onClick={() => (signOut())}>
                                                Logout
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <li className="loginRef">
                                                <Link href={'/login'}>Sign In</Link>
                                            </li>
                                            <li className="loginRef">
                                                <Link href={'/login'}>Register</Link>
                                            </li>
                                        </>
                                    )
                                }
                        </ul>
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
                        <nav className="bg-olivine-900 rounded-lg p-4 mt-4 block sm:hidden">
                            <ul className="flex flex-col justify-center items-center w-full space-y-4 text-black_olive">
                                <li>
                                    <Link href={'/about'}>About</Link>
                                </li>
                                <li>
                                    <Link href={'/contact'}>Contact</Link>
                                </li>
                                {
                                    !!props.session ? (
                                        <>
                                            <li className="loginRef bg-blush-800 px-2 rounded-lg">
                                                <Link href={'/account'}>Welcome, {props.session.user.name}</Link>
                                            </li>
                                            <button onClick={() => (signOut())}>
                                                Logout
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <li className="loginRef">
                                                <Link href={'/login'}>Sign In</Link>
                                            </li>
                                            <li className="loginRef">
                                                <Link href={'/login'}>Register</Link>
                                            </li>
                                        </>
                                    )
                                }
                            </ul>
                        </nav>
                    )}
            </div>
        </header>
    );
}