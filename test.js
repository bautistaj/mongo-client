const MongoLib = require('./index');
const collectionName = "collection"


async function test () {
    const connection = new MongoLib();

    const presidents = await connection.getAll("presidents", {});

    console.log("president: ",presidents);
}

test();
