console.log('starting app');


setTimeout(() => {
    console.log("inside callback")
}, 2000);
setTimeout(() => {
   console.log("inside 2nd callback") 
});

console.log('finishing app');
