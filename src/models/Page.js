import { Schema, model, models } from "mongoose";

const PageSchema = new Schema({
    uri: {type: String, required: true, min:1, unique: true},
}, {timestamps: true});

const Page = models?.Pages || model('Pages', PageSchema);

export {Page};