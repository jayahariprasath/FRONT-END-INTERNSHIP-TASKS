document.addEventListener('DOMContentLoaded', () => {
    const fetchUsersBtn = document.getElementById('fetchUsersBtn');
    const userDataDiv = document.getElementById('userData');
  
    fetchUsersBtn.addEventListener('click', async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
  
        // Clear previous data
        userDataDiv.innerHTML = '';
  
        // Display user data
        data.forEach(user => {
          const userDiv = document.createElement('div');
          userDiv.innerHTML = `<strong>Name:</strong> ${user.name}, <strong>Email:</strong> ${user.email}<br>`;
          userDataDiv.appendChild(userDiv);
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    });
  });
  