// facker and mysql2 package
const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");

const path = require("path");

app.set("views engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// pubic add 
app.use(express.static(path.join(__dirname, "public")));


// method override
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

// my data based ko node se connect krna
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "root",
});

//   facker packege

let getRandomUser = () => {
  return [
    faker.datatype.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};
//   console.log(getRandomUser());

//   insersion querry

let q = "insert into user(id,username, email, password) values ? ";

  // feker se  10 user ko databased mein store krna
  // let data = [];
  // for (let i=1; i<=10; i++){
  //     data.push(getRandomUser());
  //     //    console.log(getRandomUser());
  // };

  // try{
  //     connection.query(q, [data], (err, results) => {
  //      if(err) throw err;
  //       console.log(results);
  //     });
  // } catch(err){
  // console.log(err)
  // };

// connection.end();

// express

// home route
app.get("/", (req, res) => {
  let q = `select count(*) from user`;
  try {
    connection.query(q, (err, results) => {
      if (err) throw err;
      let count = results[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("some error found");
  }
});

// views all user name email and something something

app.get("/user", (req, res) => {
  let q = `select * from user`;
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      //    res.send(results);
      res.render("show.ejs", { users });
    });
  } catch (err) {
    console.log(err);
    res.send("some error found");
  }
});

// edit route

app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `select * from user where id = '${id}' `;

  try {
    connection.query(q, (err, results) => {
      if (err) throw err;
      let user = results[0];
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("some error found");
  }
});

// patch route which update form

app.patch("/user/:id", (req, res) => {
    // access id
  let { id } = req.params;
//   pahle query  jisme id find krenge
  let q = `select * from user where id = '${id}' `;

//   password or username ko find kiya kuki form pass or hamne jo likha wo pass check krne ke liya 
  let { password: formPaassword, username: newUsername } = req.body;
//    1st querry ko check krna
        try {
           connection.query(q, (err, results) => {
               if (err) throw err;
             let user = results[0];
                 //   check password correct or incoorect 
              if (formPaassword != user.password) {
                        res.send("Wrong password");
                } else{
                    // check 2nd querry 
              let q2 = `update user set username= '${newUsername}' where id = '${id}' `;
            connection.query(q2, (err, results) => {
              if(err) throw err;
                res.redirect("/user");  
                      })
                  }
             });
  } catch (err) {
    console.log(err);
    res.send("some error found");
  }
});


// create a new content

app.get("/user/new", (req,res) => {
  res.render("new.ejs");
});

app.post("/user/new" , (req,res) => {
  let {  username , email , password} = req.body;
  let id = uuidv4();
   let q =  `INSERT INTO user (id, username, email, password) VALUES ('${id}','${username}','${email}','${password}') `;
   try{
     connection.query(q, (err, results) => {
       if(err) throw err;
      //  console.log(results);
       res.redirect("/user");
        });
    } catch(err){
    console.log(err)
    };
});




// 🔥 1st method jisme = password magta hain for () delete post 


app.get("/user/:id/delete", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      
      let user = result[0];
      res.render("delete.ejs", { user });
    });
  } catch (err) {
    res.send("some error with DB");
  }
});

app.delete("/user/:id/", (req, res) => {
  let { id } = req.params;
  let { password } = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];

      if (user.password != password) {
        res.send("WRONG Password entered!");
      } else {
        let q2 = `DELETE FROM user WHERE id='${id}'`; //Query to Delete
        connection.query(q2, (err, result) => {
          if (err) throw err;
          else {
            console.log(result);
            console.log("deleted!");
            res.redirect("/user");
          }
        });
      }
    });
  } catch (err) {
    res.send("some error with DB");
  }
});

// 🔥 2nd method for delete user jisme direct delete ho jata hain 


// app.delete("/user/:id", (req,res) => {
//   let {id} = req.params;
//   let q = `delete from user where id = '${id}'`;
//   try{
//     connection.query(q, (err, result) => {
//       if(err) throw err;
//       // console.log(result)
//       res.redirect("/user")
//     })
//   } catch (err) {
//     res.send("some error with DB")
//   }

//   }
// );



let port = 3000;
app.listen(port, (req, res) => {
  console.log("app is runnning");
});
