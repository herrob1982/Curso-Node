const users = [
    {
        id: 1,
        name: 'John Doe',
        email: 'herro.com',
    },
    {   
        id: 2,
        name: 'Andre Inca',
        email: 'herro.com 1',
    }
]

// function getUserById(id){
//    const user = users.find( function(user){
//         return user.id === id});
//       //  console.log({user});
// }

function getUserById(id,callback){
   const user = users.find( function(user){
        return user.id === id});

    if(!user){
        callback(new Error('User not found'), null);
    }

    return callback(null, user);
}

//getUserById(2);

module.exports = {
    getUserById
}