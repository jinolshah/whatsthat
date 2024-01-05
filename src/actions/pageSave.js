'use server';

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Page } from "@/models/Page";
import { User } from "@/models/User";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";

export default async function pageSave(formData) {
    mongoose.connect(process.env.MONGODB_URI);
    const session = await getServerSession(authOptions);
    
    if (!!session) {
        const displayName = formData.get('displayName');
        const location = formData.get('location');
        const bio = formData.get('bio');
        const bgType = formData.get('bgType');
        const bgColor = formData.get('bgColorInput');
        const bgImage = formData.get('bgImageInput');
        const updateThis = {
            displayName:displayName, location:location, bio:bio, bgType:bgType,
        }

        if (!!bgColor) updateThis.bgColor = bgColor;
        if (!!bgImage) updateThis.bgImage = bgImage;

        console.log(updateThis);

        await Page.updateOne(
            {owner:session?.user?.email}, 
            updateThis,
        );

        if (formData.has('avatar')) {
            const avatarLink = formData.get('avatar');
            await User.updateOne(
                {email:session?.user?.email},
                {customImage: avatarLink},
            )
        }

        return true;
    }

    return false;
}