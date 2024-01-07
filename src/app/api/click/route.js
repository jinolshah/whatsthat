import { Events } from "@/models/Events";
import mongoose from "mongoose";

export async function POST(req) {
    const url = new URL(req.url);
    const clickedLink = atob(url.searchParams.get('url'));

    console.log(clickedLink);

    // mongoose.connect(process.env.MONGODB_URI);
    // await Events.create({type:'click', uri:''});
    return Response.json(true);
}