// people collection
db.people.insertOne({first_name: "Benji", last_name: "Abdullah", email: "benjiabu@gmailstuff.com", gender: "Male", age: 21, state: "Maine", children: []});
db.people.insertOne({first_name: "Jaime", last_name: "Hernandez", email: "thequickjaime@soccerblog.org", gender: "Male", age: 32, state: "Texas", children: [{name: "Rosa", age: 6}, {name: "Bella", age: 4}]});
db.people.updateOne({first_name: "Clarence"}, {$set: {state: "South Dakota"}});
db.people.updateOne({first_name: "Rebecca", last_name: "Hayes"}, { $unset: {email: 1}});
db.people.updateMany({state: "Missouri"}, { $inc: {age: 1} });
db.people.replaceOne({first_name: "Jerry", last_name: "Baker"}, { first_name: "Jerry", last_name: "Baker-Mendez", email: "jerry@classic.ly", gender:"Male", age: 28, state: "Vermont", "children": [{name: "Alan", age: 18}, {name: "Jenny", age: 3}] });
db.people.deleteOne({first_name: "Wanda", last_name: "Bowman"});
db.people.deleteMany({email: null});

// submissions collection
db.submissions.insertMany([{title: "The River Bend", upvotes: 10, downvotes: 2, artist: ObjectId("60ae71ce91e234aa2ff88a0f")},
{title: "Nine Lives", upvotes: 7, downvotes: 0, artist: ObjectId("60ae71ce91e234aa2ff88a3d")},
{title: "Star Bright", upvotes: 19, downvotes: 3, artist: ObjectId("60ae71ce91e234aa2ff88ac0")},
{title: "Why Like This?", upvotes: 1, downvotes: 5, artist: ObjectId("60ae71ce91e234aa2ff88a46")},
{title: "Non Sequitur", upvotes: 11, downvotes: 1, artist: ObjectId("60ae71ce91e234aa2ff88a0d")}])
db.submissions.updateOne({title: "The River Bend"}, { $inc: {upvotes: 2}});
db.submissions.updateMany({upvotes: {$gte: 10}}, {$set: {round2: true}});