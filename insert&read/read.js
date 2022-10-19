const db_connect = require('./db_config');

const main=async()=>{
    let data=await db_connect();
    data=await data.find().toArray();
    console.warn(data);
}
main();