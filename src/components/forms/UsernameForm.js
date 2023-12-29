'use client';
import grabUsername from "@/actions/grabUsername";
import SubmitForm from "@/components/buttons/SubmitForm";
import { redirect } from "next/navigation";
import { useState } from "react";


export default function UsernameForm({usernameAskedFor}) {
    const [errorExists, setErrorExists] = useState(false);
    const [error, setError] = useState('');

    async function handleSubmit(formData) {
        if (!formData.get('username')) {
            setErrorExists(true);
            setError('Username cannot be empty');
            return;
        }

        const result = await grabUsername(formData);

        if (result === false) {
            setErrorExists(true);
            setError('Username taken');
            return;
        } else {
            redirect('/account?createdUser='+formData.get('username'));
        }
    }

    return (
        <form action={handleSubmit}>
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
                        defaultValue={usernameAskedFor}
                        className="border-olivine-700 border-2 rounded-lg border-solid px-4 py-2 
                                    text-center focus:outline-none font-mono"/>
                    {
                        errorExists && (
                            <p className="mt-2">
                                <span className="px-2 py-1 text-sm text-red-600 bg-blush-900 rounded-lg">{error}</span>
                            </p>
                        )
                    }
                    <SubmitForm>
                        <span className="font-bold">Get username</span>
                    </SubmitForm>
                </div>
            </div>
        </form>
    )
}