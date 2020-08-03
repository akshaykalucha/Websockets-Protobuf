var fs = require('fs')
// var until = require('until')
const { promisify } = require('util');
const { rejects } = require('assert');
const read = promisify(fs.readFile)

//Normal file reading

var mytextdata = () => {
    fs.readFile('data.txt', function (err, data) {
    if (err) {
       return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
})
};



//ASYNC AWAIT
var run = async() => {
    setTimeout(
        function(){
            fs.readFile('data.txt', function(err,data){
                if(err){
                    return console.log(err)
                }
                console.log(data.toString())
            })
        }, 3000
    )

    read('data.txt')
    .then(data=>{
        console.log(data.toString())
    })

    console.log('after setTimeout')

    const data = await read('data.txt')
    console.log(data.toString(), "from await")
}

// run()

// console.log("hihihi not async")


//PROMISES

function mydatafunc(){
    return "this is my data"
}


const prom = async() =>{
    const wait = new Promise((resolve, reject)=>{
        resolve(mydatafunc())
        reject('bad')
    })
    .then(data=>{
        console.log(data)
    })
    .catch(err=>{
        console.log(err)
    })
}
prom()

let readfilepromise = () => {new Promise((resolve,reject) => {
    fs.readFile('data.txt', (err, data) => {
        if(err){
            reject(err)
        }else{
            resolve(data)
        }
    })
}).then(data=>{
    console.log(data.toString())
    })
    .catch(err=>{
        console.log(err)
    })
};

readfilepromise()