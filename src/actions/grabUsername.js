'use server';

import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import {Page} from '@/models/Page';
import mongoose from 'mongoose';
import { getServerSession } from 'next-auth';

export default async function grabUsername(formData) {
    const session = await getServerSession(authOptions);
    const username = formData.get('username');

    mongoose.connect(process.env.MONGODB_URI);

    const usernameExists = await Page.findOne({uri:username});
    if (!!usernameExists) {
        return false;
    } else {
        return JSON.parse(
            JSON.stringify(
                await Page.create(
                    {
                        uri: username, 
                        owner: session?.user?.email,
                    }
                )
            )
        )
    }
}