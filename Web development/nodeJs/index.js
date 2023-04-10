// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/piyalconnect');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const kittySchema = new mongoose.Schema({
  name: String
});

const Kitten = mongoose.model('pKitten', kittySchema);

const silence = new Kitten({ name: 'janifar' });
// console.log(silence.name);
Kitten.find({ name: "janifar" });
//silence.save();