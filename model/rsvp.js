const  mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RSVP = new Schema({
  name: { type: String, require: true },
  cName: { type: String, require: true },
  songs: { type: String, require: true },
  diet: { type: String, require: true },
  phone: { type: String, require: true },
  email: { type: String, require: true },
  attending: { type: String, require: true },
});

module.exports = mongoose.model("RSVP", RSVP);
