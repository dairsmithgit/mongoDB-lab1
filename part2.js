// people collection
db.people.insertOne({first_name: "Benji", last_name: "Abdullah", email: "benjiabu@gmailstuff.com", gender: "Male", age: 21, state: "Maine", children: []});
db.people.insertOne({first_name: "Jaime", last_name: "Hernandez", email: "thequickjaime@soccerblog.org", gender: "Male", age: 32, state: "Texas", children: [{name: "Rosa", age: 6}, {name: "Bella", age: 4}]});
db.people.updateOne({first_name: "Clarence"}, {$set: {state: "South Dakota"}});
db.people.updateOne({first_name: "Rebecca", last_name: "Hayes"}, { $unset: {email: 1}});
db.people.updateMany({state: "Missouri"}, { $inc: {age: 1} });
db.people.replaceOne({first_name: "Jerry", last_name: "Baker"}, { first_name: "Jerry", last_name: "Baker-Mendez", email: "jerry@classic.ly", gender:"Male", age: 28, state: "Vermont", "children": [{name: "Alan", age: 18}, {name: "Jenny", age: 3}] });
db.people.deleteOne({first_name: "Wanda", last_name: "Bowman"});
// delete everyone with no email

// submissions collection
