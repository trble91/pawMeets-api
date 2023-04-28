import db from "../db/connection.js";
import Dog from "../models/Dog.js";
import dogs from "../seed/dogs.json" assert { type: "json" };

const insertData = async () => {
    await db.dropDatabase();
    await Dog.insertMany(dogs);
    db.close();
}

insertData();