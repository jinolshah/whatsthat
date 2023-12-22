import Link from "next/link";

export default function Header() {
    return (
        <header className="">
            <div className="flex justify-between max-w-6xl p-6 m-auto">
                <div className="flex gap-12">
                    <Link href={'/'} className="text-xl text-black_olive font-bold">wotit &gt;&gt;</Link>
                    <nav className="flex items-center gap-4 text-black_olive text-base">
                        <Link href={'/about'}>About</Link>
                        <Link href={'/contact'}>Contact</Link>
                    </nav>
                </div>
                <div className="flex items-center gap-4 text-black_olive text-base">
                    <Link href={'/login'}>Sign In</Link>
                    <Link href={'/register'}>Register</Link>
                </div>
            </div>
        </header>
    );
}