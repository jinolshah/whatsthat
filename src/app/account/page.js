import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route.js"
import { redirect } from "next/navigation";
import grabUsername from "@/components/actions/grabUsername";


export default async function AccountPage({searchParams}) {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/');
    }

    return (
        <div>
            {/* {searchParams.usernameAskedFor}
            {session?.user?.name} */}
            <form action={grabUsername}>
                <div className="flex flex-col bg-white max-w-md mx-auto p-4 text-center py-16 rounded-3xl">
                    <div>
                        <h1 className="font-bold sm:text-4xl text-4xl text-black_olive tracking-tight">
                            Get a username<br/>for your profile
                        </h1>
                        <h2 className="text-black_olive mt-2">
                            Enter desired username
                        </h2>
                    </div>
                    <div className="flex flex-col max-w-xs m-auto mt-16">
                        <input type='text' placeholder='username' name='username'
                            defaultValue={searchParams?.usernameAskedFor}
                            className="border-olivine-700 border-2 rounded-lg border-solid px-4 py-2 mb-6 
                                        text-center focus:outline-none font-mono"/>
                        <button
                            className='bg-olivine-700 py-4 px-8 rounded-full text-black_olive
                                        flex flex-row items-center text-nowrap justify-center gap-2'>
                            <span className="font-bold">Get username</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
} 