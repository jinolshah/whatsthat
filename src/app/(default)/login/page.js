import LoginGoogle from '@/components/buttons/LoginGoogle';
import { getServerSession } from 'next-auth';
import { authOptions } from "@/app/api/auth/[...nextauth]/route.js";
import { redirect } from 'next/navigation';

export default async function LoginPage() {
    const session = await getServerSession(authOptions);
    if (!!session) {
        redirect('/account');
    }

    return (
        <div className="flex flex-col bg-white max-w-md mx-auto p-4 text-center py-16 rounded-3xl">
            <div>
                <h1 className="font-bold sm:text-6xl text-4xl text-black_olive tracking-tight">
                    Welcome
                </h1>
                <h2 className="text-black_olive mt-2">
                    Sign in here
                </h2>
            </div>
            <div className="flex flex-col max-w-xs m-auto mt-12">
                <LoginGoogle />
            </div>
        </div>
    );
}