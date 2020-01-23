var mongo = require('mongodb').MongoClient
const process = require('process');
//const age = parseInt(process.argv[2]);
const firstName = process.argv[2];
const lastName = process.argv[3];

let url = 'mongodb://localhost:27017/learnyoumongo';
	const obj = {
        firstName : firstName,
        lastName : lastName
};

	mongo.connect(url, function(err, db) {
	let dbo = db.db("learnyoumongo");
	dbo.collection("parrots").insert(obj,function(err) {
	if (err) throw err;
	console.log(JSON.stringify(obj));

})
db.close();
})
 
