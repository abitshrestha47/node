const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017';

const client=new MongoClient(url);
const database='customer';

async function db_connect(){
    let result=await client.connect();
    let db=result.db(database);
    return db.collection('customers');
}
module.exports=db_connect;