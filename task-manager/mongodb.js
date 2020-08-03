// CRUD Operations
const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;

const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

mongoClient.connect(
  connectionUrl,
  { useUnifiedTopology: true },
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      return console.log("Error Happened");
    }

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
