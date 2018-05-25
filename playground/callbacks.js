var getUser = (id, callback) => {
    var user = {
        name: 'rajat',
        id: id
        };
    callback(user);
};

getUser(31, (userInfo) =>{
    console.log(userInfo);
})
