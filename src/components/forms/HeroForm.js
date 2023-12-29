'use client';
import { /*useEffect,*/ useState } from "react";
import { signIn } from "next-auth/react";
// import { redirect } from "next/navigation";
import { useRouter } from 'next/navigation'

export default function HeroForm({session}) {
    // useEffect(() => {
    //     if ('localStorage' in window && window.localStorage.getItem('usernameAskedFor')) {
    //         const username = window.localStorage.getItem('usernameAskedFor');
    //         window.localStorage.removeItem('usernameAskedFor');
    //         redirect('/account?username=' + username);
    //     }
    // })

    const [username, setUsername] = useState('');

    const router = useRouter()

    async function handleSubmit(ev) {
        ev.preventDefault();
        if (username.length > 0) {
            // window.localStorage.setItem('usernameAskedFor', username);
            if (!!session) {
                router.push('/account?usernameAskedFor=' + username);
            } else {
                await signIn('google', {callbackUrl: '/account?usernameAskedFor=' + username});
            }
        }
    }

    return (
        <form
            onSubmit={handleSubmit} 
            className="flex flex-row flex-wrap items-center mt-10 pr-6">
            <div className='bg-white overflow-hidden p-4 mb-4 mr-4 flex flex-row'>
                <p className='text-black_olive'>
                    wotit.app/
                </p>
                <input
                    value={username}
                    onChange={ev => setUsername(ev.target.value)}
                    type="text" className="text-black_olive placeholder-black_olive-700 focus:outline-none" placeholder="username"/>
            </div>
            <button type="submit" className="bg-blush-600 text-black_olive py-4 px-6 rounded-full mb-4">
                Join
            </button>
        </form>
    );
}
