console.log('this is the first execution.');//goes to call stack and executes

setTimeout(()=>{
    console.log('this is the forth execution');//goes to node API
},2000);//same thing happens here 

setTimeout(()=>{
    console.log('this is the third execution');//goes to node API<2000so,go to callback  queue
    //after main finishes goes to call stack and executes first
},0);

console.log('this is the second execution');//goes to call stack and executes

//output
//this is the first execution
//this is the second executoin
//this is the third execution
//this is the fourth execution