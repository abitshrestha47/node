const db_connect = require('./db_config');

const insert=async()=>{
    const db=await db_connect();
    const result=db.insertMany(
        [
            {name:'Amy',product:'apple',phone:999},
            {name:'jackky',product:'mango',phone:933}
        ]
    )
}
insert();