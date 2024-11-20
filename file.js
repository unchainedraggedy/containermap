async function getUsers(names) {
    const baseUrl = 'https://api.github.com/users/';
    
    const requests = names.map(async (name) => {
      try {
        const response = await fetch(`${baseUrl}${name}`);
        if (!response.ok) {
          return { error: `User ${name} not found`, status: response.status };
        }
        return await response.json();
      } catch (error) {
        return { error: `Error fetching data for ${name}`, message: error.message };
      }
    });
  
    return Promise.all(requests);
  }
  
  // Пример использования:
  getUsers(['unchainedraggedy']).then(users => console.log(users[0]));
  