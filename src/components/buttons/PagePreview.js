'use server';

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Page } from "@/models/Page";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";

export default async function PagePreviewButton() {
    const session = await getServerSession(authOptions);
    mongoose.connect(process.env.MONGODB_URI);

    const page = await Page.findOne({owner: session?.user?.email});
    return (
        <div>
            <span>&gt;&gt;/</span>
            <span>{page.uri}</span>
        </div>
    )
}