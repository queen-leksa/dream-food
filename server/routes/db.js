const connectDB = function() {
    const MongoClient = require("mongodb").MongoClient;
    const user = process.env.DBNAME || "leksa";
    const pwd = process.env.DBPASS || "ololo";
    const uri = `mongodb+srv://${user}:${pwd}@cluster0.peuzq.mongodb.net/food?retryWrites=true&w=majority`;
    return new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

module.exports = connectDB;