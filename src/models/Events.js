const { Schema, model, models } = require("mongoose");

const EventsSchema = new Schema({
    type: String, // click or view
    uri: String, // userPage or listed link
}, {timestamps: true});

const Events = models?.Events || model('Events', EventsSchema);

export {Events}