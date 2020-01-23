var mongo = require('mongodb').MongoClient
const process = require('process');


let url = 'mongodb://localhost:27017/learnyoumongo';
	

	mongo.connect(url, function(err, db) {
	let dbo = db.db("learnyoumongo");
  dbo.collection(process.argv[3]).remove({ _id: process.argv[4] }).toArray((err) => {
		if (err) throw err;
		dbo.close();
	}); 
})
 
