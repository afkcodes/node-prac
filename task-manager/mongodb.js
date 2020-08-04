// CRUD Operations
require("dotenv").config();
const { MongoClient, ObjectId } = require("mongodb");

const databaseName = "task-manager";

// Generate New Id
// const id = new ObjectId()

MongoClient.connect(
  process.env.URL,
  { useUnifiedTopology: true },
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      return console.log("Error Happened" + err);
    }
    console.log("Connected");

    const db = client.db(databaseName);

    // InserOne -----------------------------------------------------------

    // db.collection("users").insertOne(
    //   {
    //     name: "Ashish",
    //     age: 25,
    //   },
    // (err, result) => {
    //   if (err) {
    //     console.log("somethhing went wrong unable to push data");
    //   }
    //   console.log(result.ops);
    // }
    // );

    // InsertMany ---------------------------------------------------------

    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       desc: "Learn Mongo",
    //       status: "Ongoing",
    //     },
    //     {
    //       name: "Create Api",
    //       status: false,
    //     },
    //     {
    //       name: "Integrate with Rb",
    //       status: false,
    //     },
    //   ],
    //   (err, result) => {
    //     if (err) {
    //       console.log("somethhing went wrong unable to push data");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // FindOne ------------------------------------------------------------
    // db.collection("users").findOne({ name: "Ashish" }, (err, result) => {
    //   if (err) {
    //     return console.log("error Happened");
    //   }

    //   console.log(result);
    // });

    // Find ----------------------------------------------------------------
    // db.collection("tasks").find({ status: false }).toArray((err, result) => {
    //   if (err) {
    //     return console.log("error Happened");
    //   }

    //   console.log(result);
    // });

    //  Update Set --------------------------------------------------------

    // db.collection("users")
    //   .updateOne(
    //     { name: "Ashish" },
    //     {
    //       $set: { name: "Monchen" },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    //  Update Increment ---------------------------------------------------

    // db.collection("users")
    // .updateOne(
    //   { name: "Monchen" },
    //   {
    //     $inc: { age: 1 },
    //   }
    // )
    // .then((result) => {
    //   console.log(result);
    // })
    // .catch((err) => {
    //   console.log(err);
    // });

    //  UpdateMany -----------------------------------------------------

    // db.collection("tasks")
    //   .updateMany(
    //     { status: false },
    //     {
    //       $set: {
    //         status: true,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // DeleteMany ------------------------------------------------------
    
    // db.collection("tasks")
    //   .deleteMany({ status: true })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
);
