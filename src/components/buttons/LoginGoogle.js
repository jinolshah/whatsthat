'use client';
import { FaGoogle } from "react-icons/fa";
import {signIn} from "next-auth/react";

export default function LoginGoogle() {
    return (
        <button 
            onClick={() => signIn('google')}
            className='bg-blush-600 py-4 px-8 rounded-full text-black_olive
                        flex flex-row items-center text-nowrap justify-center gap-2'>
            <FaGoogle />
            <span className="font-bold">Continue with Google</span>
        </button>
    );
}