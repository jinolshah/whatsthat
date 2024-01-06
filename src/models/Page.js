import { Schema, model, models } from "mongoose";

const PageSchema = new Schema({
    uri: {type: String, required: true, min:1, unique: true},
    owner: {type: String, required: true},
    displayName: {type:String, default:''},
    location: {type:String, default:''},
    bio: {type:String, default:''},
    bgType: {type: String, default: 'color'},
    bgColor: {type: String, default: '#30332e'},
    bgImage: {type: String, default: `https://${process.env.BUCKET_NAME}.s3.amazonaws.com/black.png`},
    links: {type: Object, default: []},
}, {timestamps: true});

const Page = models?.Pages || model('Pages', PageSchema);

export {Page};