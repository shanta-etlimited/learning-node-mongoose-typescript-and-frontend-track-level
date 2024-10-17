// in, nin, sort, findFiltering
// db.test.find(
//     { gender: "Female", 
//     age: { $nin: [18, 20, 22, 24, 28]},
//     interests: {$in: ["Cooking", "Gaming"]} 
//     },
//     { age: 1, gender: 1, interests: 1 }).
//     sort({ age: 1 })

// $lte , $ne
// db.test.find({age: {$ne: 16 , $lte: 30}})

// Explicit $and
// db.test.find({
//     $and: [
//         {gender: "Female" },
//         { age: { $ne: 15 } },
//         { age: { $lte: 30 } }
//     ]
// }).project({
//     age: 1,
//     gender: 1
// }).sort({
//     age: 1
// })

// })

// Explicit $or for find same fields with different value
// db.test.find({
//     $or: [
//         { interests: "Traveling" },
//         { interests: "Cooking" },
//         { "skills.name" : "JAVASCRIPT"},
//         { "skills.name" : "PYTHON"}
//     ]
// }).project({
//   skills: 1
// }).sort({
//     age: 1
// })

// $in for find same fields with different value
// db.test.find({ "skills.name" : {$in: ["JAVASCRIPT", "PYTHON"]}
// }).project({
//   skills: 1
// }).sort({
//     age: 1
// })


// $exists for exist field
// db.test.find({
//     phone: {$exists: true}
// })


//$type for typeof field
// db.test.find({
//     age: {$type: "number"}
// })

//$size for array length
// db.test.find({
//     friends: {$size: 5}
// }).project({friends: 1})

//$all for search array
// db.test.find({"interests.2": "Cooking"}).project({interests: 1}) // it will show array where 2 position is contained cooking
// db.test.find({interests: ["Cooking", "Writing", "Reading"]}).project({interests: 1})// it will show exact position array of interests

//to fixed this issue i will use $all here where there will be present [ "Travelling", "Reading", "Cooking" ] array and no matter position then use $all
// db.test.find({
//     interests: {$all: [ "Travelling", "Reading", "Cooking" ]}
// }).project({interests: 1})

// this will be matched exact position otherwise different postion will not be showed
// db.test.find({
//     skills:{
//         name: "JAVASCRIPT",
//         level: "Intermidiate",
//         isLearning: false
//     }
// }).project({skills:1})

//solve this $elemMatch 
// db.test.find({
//   skills: {$elemMatch: {
//       name: "JAVASCRIPT",
//       level: "Intermidiate",

//   }}
// }).project({skills: 1})

//$set for update and set premitive data 
// db.test.updateOne({
//     _id: ObjectId("6406ad63fc13ae5a40000065")
// },
//     { $set: {
//         age: 80
//     } })

//$addToSet to update and set non premitive data
// db.test.updateOne({
//     _id: ObjectId("6406ad63fc13ae5a40000065")
// },
// {
//     $addToSet: {
//     interests: ["Swimming", "Something"]
// }})

//$each for single set but multiple value
// db.test.updateOne({
//     _id: ObjectId("6406ad63fc13ae5a40000065")
// },
// {
//     $addToSet: {
//     interests: {$each: ["Cooking", "Driving"]}
// }})

//$push for update and set value duplicately
// db.test.updateOne({
//     _id: ObjectId("6406ad63fc13ae5a40000065")
// },
//     {
//         $push: {
//             interests: { $each: ["Cookingg", "Drivingg"] }
//         }
//     })

//$unset for remove date 
// db.test.updateOne(
//     {_id: ObjectId("6406ad63fc13ae5a40000065")},
//     {$unset: {
//         birthday: ""
//     }})

//$pop for remove array first element
// db.test.updateOne(
//     {_id: ObjectId("6406ad63fc13ae5a40000065")},
//     {$pop:{friends: -1}
//     })

//$pull for remove one specific value for primitive data
// db.test.updateOne(
//     {_id: ObjectId("6406ad63fc13ae5a40000065")},
// { $pull: { friends: "Abdur Rakib" }
//     })



//$pullAll for remove multiple specific value
// db.test.updateOne(
//     {_id: ObjectId("6406ad63fc13ae5a40000065")},
//     {$pullAll:{friends: [ "Mir Hussain", "Fahim Ahammed Firoz" ]}
//     })


//$set for update single or multiple object property
// db.test.updateOne(
//     {_id: ObjectId("6406ad63fc13ae5a40000065")},
//     {$set:{
//         "address.city": "dhaka",
//         "address.country": "Bangladesh"
//     }})

// db.test.updateOne(
//     {_id: ObjectId("6406ad63fc13ae5a40000065"), "education.major": "Art"},
//     {$set:{
//         "education.$.major": "CSE"
//     }})


//create collection
// db.createCollection("course-students")

//aggregation---> $match and $project
// db.test.aggregate([
//     //stage-1
//     {$match: {gender: "Male", age: {$lt: 30}}}
//      {$project: {name: 1, age:1, gender:1}}
//     ])

// aggregation--> $addFields ..here addfield will not modified main document 
// db.test.aggregate([
//     //stage-1
//     { $match: { gender: "Male" } }
//     //stage-2
//     { $addFields: { course: "level-2" } }
//     //stage-3
//     { $project: { course: 1 } }
// ])

// aggregate---> $out will be create new collection and add new data from addfields
// db.test.aggregate([
//     //stage-1
//     { $match: { gender: "Male" } }
//     //stage-2
//     { $addFields: { course: "level-2" , eduTech: "PH"} }
//     //stage-3
//     { $project: { course: 1 , eduTech:1} }
//     //stage-4
//     {$out: "course-students"}
// ])

// aggregate---> $merge will be merge new data to the existing data
// db.test.aggregate([
//     //stage-1
//     { $match: { gender: "Male" } }
//     //stage-2
//     { $addFields: { course: "level-2" , eduTech: "PH"} }
//     //stage-3
//     { $project: { course: 1 , eduTech:1} }
//     //stage-4
//     {$merge: "test"}
// ])


// aggregate---> $group will be group data which is defined by _id
// db.test.aggregate([
//     //stage-1
//     {$group: {_id: "$gender", count: {$sum: 1}}}
// ])

// aggregate---> $push will be show extra document with specific value
// db.test.aggregate([
//     //stage-1
//     {$group: {_id: "$address.country", amkDekhaoName: {$push: "$name"},count: {$sum: 1}}}
// ])
// aggregate---> $push will be show extra full document 
// db.test.aggregate([
//     //stage-1
//     {$group: {_id: "$address.country", amkDekhaoName: {$push: "$$ROOT"},count: {$sum: 1}}}
//      //stage-2
//      {$project: {"amkDekhaoName.name":1, "amkDekhaoName.email":1, "amkDekhaoName.phone": 1}}
// ])


// aggregate---> more $group and $project
// db.test.aggregate([
//     //stage-1
//     {$group: {
//         _id: null,
//         totalSalary: {$sum: "$salary"},
//         maxSalary: {$max: "$salary"},
//         minSalary: {$min: "$salary"},
//         avgSalary: {$avg: "$salary"}
//     }
//     },
//     //stage-2
//     {
//         $project: {
//             totalSalary: 1,
//             maxSalary: 1,
//             minSalary: 1,
//             avgSalary: "$avgSalary",
//             rangeBetweenMaxandMin: {$subtract: ["$maxSalary", "$minSalary"]
//         }
//     }

// ])


//aggregate----> $group and $unwind
db.test.aggregate([
    //stage-1
    { $unwind: "$interests" },
    //stage-2
    {
        $group: { _id: "$age", interestsPerAge: { $push: "$interests" } }
    }
])





























