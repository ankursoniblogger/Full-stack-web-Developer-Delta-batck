const mongoose = require('mongoose');

main().then( () => {console.log("Successfully connected")}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/RelanshipDemo');
}

const userSchema = new mongoose.Schema({
    username: String,
    address: [
        {
            _id: false,
            location: String,
            country: String,
        }
    ]
})

const User = mongoose.model("User" , userSchema);

const addUser = async () => {
 let user1 = new User ({
    username: "Ankur soni",
    address: [
        {
            location: "101 Sonar colony",
            country: "India",
        }
    ]
 })
 user1.address.push({location: "102 abc colony" , country: "Usa"})
 let result = await user1.save();
 console.log(result);
};

addUser();




