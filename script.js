const fs = require('node:fs');


// SYNC -- Blocking Operations

// let  data = fs.readFileSync('myfile.txt', 'utf-8');

// console.clear();
// console.log('Before edit - \n');
// console.log(data);

// fs.writeFileSync('myfile2.txt', 'Hello raviiii', 'utf-8');
// fs.appendFileSync('myfile2.txt', '\n Hello Ravi', 'utf-8');

// fs.mkdirSync('games')
// fs.mkdirSync('test/tes2/t', {recursive:true})
// fs.unlinkSync('myfile.txt');
// fs.rmdirSync('test', {recursive:true});
// data = fs.readFileSync('myfile2.txt', 'utf-8');
// console.log('After edit - \n');
// console.log(data);





// ------------------------------------------

// Without Sync ------- Non- Blockinng Operations
console.log('Script Execution Started');

let data = fs.readFile('myfile2.txt', 'utf-8', function(error, data){
    if(error){
        console.log(`error occured-- ${error}`);
    }else{
        console.log(`Content -- ${data}`);
    }
})

console.log('Script Executed');

