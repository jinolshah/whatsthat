import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route.js"
import { redirect } from "next/navigation";
import UsernameForm from "@/components/forms/UsernameForm";


export default async function AccountPage({searchParams}) {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/');
    }

    return (
        <div>
            <UsernameForm usernameAskedFor = {searchParams.usernameAskedFor} />
        </div>
    )
}