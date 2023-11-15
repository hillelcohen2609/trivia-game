//load all the local storage => return areys of jsons with all the users
export  function returnAll(){
    let users = [];
    for (let index = 0; index < localStorage.length; index++) {
        const key = localStorage.key(index);
        const user = localStorage.getItem(key);
        const userjson= JSON.parse(user);
        users.push(userjson);        
    }
    
    return users;

}

//return a specific json user by index
export  function getUserByIndex(index){
    const user =  localStorage.getItem(index);
    const userjson= JSON.parse(user);

    return userjson;

}

//add a new user to the local storage(get a json) 
export  function addANewUser(jsonUser){
    const index = localStorage.length;
    localStorage.setItem(`${index}`,JSON.stringify(jsonUser))

}

//verify if a name exist in the local storage
export  function verifyIsANameExistInDb(nameU){
    //return exist in db->true
    //dont exist->false
    let flug= false;
    const users = returnAll();
    users.forEach((user)=>{
        if (user.name===nameU) {
            flug=true;
        }
    })
    return flug;
}