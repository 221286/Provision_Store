export const MakeAPICall = (email, password) => {
    // Simulating API call 
    
    return fetch('https://apiv2stg.promilo.com/user/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic UHJvbWlsbzpxNCE1NkBaeSN4MiRHQg==',
      },
      body: `username=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}&grant_type=password`,
    });
  };