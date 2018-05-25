var somePromise = new Promise((resolve, reject) =>{
    
    setTimeout(() => {
        //resolve("hey it worked");    
        reject("hey it did not worked");
    }, 3000);
    
});
somePromise.then((message) => {
    console.log(message)
}, (errorMessage) => {
    console.log(errorMessage);
});