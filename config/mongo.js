const {MongoClient, ObjectID} = require("mongodb");


const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

let db, usersCollection;

async function connectDB(){
    try {
        await client.connect()
        db = client.db("testdb");
        usersCollection = db.collection("users");
        console.log("MongoDB connected");
    }
    catch (error){
        console.error("MongoDB failed to connect", error);
    }
}