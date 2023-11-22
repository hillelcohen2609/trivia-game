//load all the local storage => return areys of jsons with all the users
export function returnAll() {
  let users = [];
  for (let index = 0; index < localStorage.length; index++) {
    const key = localStorage.key(index);
    const user = localStorage.getItem(key);
    const userjson = JSON.parse(user);
    users.push(userjson);
  }

  return users;
}

//return a specific json user by index
export function getUserByIndex(index) {
  const user = localStorage.getItem(index);
  const userjson = JSON.parse(user);

  return userjson;
}

//add a new user to the local storage(get a json)
export function addANewUser(jsonUser) {
  const index = localStorage.length;
  localStorage.setItem(`${index}`, JSON.stringify(jsonUser));
  sessionStorage.setItem(`${index}`, JSON.stringify(jsonUser));
  sessionStorage.setItem("key", `${jsonUser.id}`);
}

//verify if a name exist in the local storage
export function verifyIsANameExistInDb(nameU) {
  //return exist in db->true
  //dont exist->false
  let flug = false;
  const users = returnAll();
  users.forEach((user) => {
    if (user.name === nameU) {
      flug = true;
    }
  });
  return flug;
}

//update in ssions storage and in the local storage
export function updateUserScores(score) {
  console.log("in update score");
  let key = sessionStorage.getItem("key");
  let userStr = sessionStorage.getItem(`${key}`);
  //need to apdate score in local and sesion
  let userjson = JSON.parse(userStr);
  userjson.scores.push(score);
  //update
  localStorage.setItem(`${key}`, JSON.stringify(userjson));
  sessionStorage.setItem(`${key}`, JSON.stringify(userjson));
}

export function addToLocalStorage(user) {
  sessionStorage.setItem(`${user.id}`, JSON.stringify(user));
  sessionStorage.setItem("key", `${user.id}`);
}
