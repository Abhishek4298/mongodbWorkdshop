var mongo = require('mongodb').MongoClient
const process = require('process');


let url = 'mongodb://localhost:27017/learnyoumongo';
	

	mongo.connect(url, function(err, db) {
	let dbo = db.db("learnyoumongo");
	dbo.collection('users').update({ username: 'tinatime' }, { $set: { age: 40 } }).toArray((err) => {
		if (err) throw err;
	})
db.close();
})
 
