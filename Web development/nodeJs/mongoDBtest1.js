//Inserting data in mongodb
use piyalConnect
db.items.insertOne({"name":"samsung",price:45000,rating:4.6,qty:255,sold:98})

db.items.insertMany([{"name":"samsung",price:45000,rating:4.6,qty:255,sold:98},{name:"Motorola",price:25000,rating:4.2,qty:2055,sold:987}])  

//show commends
show dbs 
show collections

//shearching query for all
db.items.find()
//shearching query for key:value
db.items.find({key:"value"})
db.items.find({key:"value"},{key:1})
db.items.find({key:"value"},{key:1,key:1})
db.items.find({key:{$gt:number})
db.items.find({key:{$gte:number})
db.items.find({key:{$lt:number})
db.items.find({key:{$lte:number})
db.items.find({key:{$lte:number},key:{$gt:number}})//and
db.items.find({$or:[key:{$lte:number},key:{$gt:number}]})//or
//Delete query for key:value
db.items.deleteOne(key:value)
db.items.deleteMany({key:{$gt:number})
db.items.deleteMany({key:{$gte:number})
db.items.deleteMany({key:{$lt:number})
db.items.deleteMany({key:{$lte:number})
db.items.deleteMany({key:{$lte:number},key:{$gt:number}})//and
db.items.deleteMany({$or:[key:{$lte:number},key:{$gt:number}]})//or
//Update query for key:value
db.items.updateOne({key:"value"},{$set:{{key:value}}})
db.items.updateMany({key:"value"},{$set:{{key:value}}})
db.items.updateMany({key:"value"},{$set:{{key:value,key:value}}})