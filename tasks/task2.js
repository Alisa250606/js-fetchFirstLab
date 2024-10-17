async function createUser(user) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email
      })
    });

    const data = await response.json();
    return data;  
  } catch (error) {
    console.error('Error creating user:', error);
    return null;
  }
}


module.exports = createUser;
