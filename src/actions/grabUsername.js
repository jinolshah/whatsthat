'use server';

import {Page} from '@/models/Page';
import mongoose from 'mongoose';

export default async function grabUsername(formData) {
    console.log('test2');
    const username = formData.get('username');

    mongoose.connect(process.env.MONGODB_URI);

    const usernameExists = await Page.findOne({uri:username});
    if (!!usernameExists) {
        return false;
    } else {
        return (
           JSON.parse(JSON.stringify(await Page.create({uri:username})))
        );
    }
}