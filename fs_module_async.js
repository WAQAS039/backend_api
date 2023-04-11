const {readFile,writeFile} = require('fs');

readFile("./content/first.txt","utf-8",(error,result)=>{
    if(error){
        console.log(error);
        return;
    }
    console.log(result);
    writeFile('./content/first.txt',"this has been appended",{flag:"a"},(error,result) =>{
        if(error){
            console.log(error);
            return;
        }
    });
});