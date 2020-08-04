// CRUD Operations
require('dotenv').config()
const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;

const databaseName = "task-manager";

mongoClient.connect(
  process.env.URL,
  { useUnifiedTopology: true },
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      return console.log("Error Happened" + err);
    }
    console.log("Connected");

    const db = client.db(databaseName);
    db.collection("users").insertOne(
      {
        name: "Game",
        age: 27,
      },
      (err, result) => {
        if (err) {
          console.log("somethhing went wrong unable to push data");
        }
        console.log(result.ops);
      }
    );
  }
);
