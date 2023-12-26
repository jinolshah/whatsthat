import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route.js"
import Link from "next/link";

export default async function SessionHandler() {
    const session = await getServerSession(authOptions);
    
    return(
        !!session ? (
            <>
                <li className="loginRef">
                    Welcome, vatto.
                </li>
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
    )
}