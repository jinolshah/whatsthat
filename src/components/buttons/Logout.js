'use client';

import { signOut } from "next-auth/react";

export default function Logout({className='text-center', children}) {
    return (
        <button
            type="button" 
            onClick={() => signOut()}
            className={className}>
            {children}
        </button>
    )
}