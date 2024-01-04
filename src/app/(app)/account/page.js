import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route.js"
import { redirect } from "next/navigation";
import UsernameForm from "@/components/forms/UsernameForm";
import PageForm from "@/components/forms/PageForm";
import { Page } from "@/models/Page";
import mongoose from "mongoose";


export default async function AccountPage({searchParams}) {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/');
    }

    mongoose.connect(process.env.MONGODB_URI);
    
    const page = await Page.findOne({owner: session?.user?.email});

    if (!!page) {
        return(
            <PageForm page={JSON.parse(JSON.stringify(page))} session={JSON.parse(JSON.stringify(session))}/>
        )
    }

    return (
        <div>
            <UsernameForm usernameAskedFor = {searchParams.usernameAskedFor} />
        </div>
    )
}