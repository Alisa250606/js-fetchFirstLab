async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    
    let result = [];
    for (let i = 0; i < users.length; i++) {
      let user = {
        id: users[i].id,
        name: users[i].name
      };
      result.push(user);
    }

    return result;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}


fetchUsers().then(users => console.log(users));

module.exports = fetchUsers;
