async function deleteUser(id) {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  
  try {
    const response = await fetch(url, {
      method: 'DELETE',
    });
    
    return { status: response.status };
  } catch (error) {
    console.error('Error:', error);
    return { status: null }; 
  }
}


deleteUser(1).then(response => console.log(response));

module.exports = deleteUser;
