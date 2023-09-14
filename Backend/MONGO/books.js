const mongoose = require('mongoose');

main().then( () => {
    console.log("Successfully conntected");
  })
  .catch(err => console.log(err));
  
  async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
  }


  const bookSchema = new mongoose.Schema({
 name: {
    type: String,
    required: true,
 },
 auther: {type: String},
 price:{type:Number}
  });


  const Book = mongoose.model("Book" , bookSchema );

//   const book1 = new Book({ name:"chemixty", auther: "md", price:110})

//   book1.save().then((res) => {console.log(res)}).catch((err) => console.log(err));

// Book.find({}).then((res) => {console.log(res)}).catch((err) => console.log(err));

// Book.updateOne({name:"chemixty"}, {name:"chemistry"}).then((res) => {console.log(res)}).catch((err) => console.log(err));

// Book.deleteMany({price:110}).then((res) => {console.log(res)}).catch((err) => console.log(err));

