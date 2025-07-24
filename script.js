document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Example login credentials (for demo purposes only)
  const correctUsername = 'admin';
  const correctPassword = '1234';

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === correctUsername && password === correctPassword) {
    document.getElementById('message').style.color = 'lightgreen';
    document.getElementById('message').textContent = 'Login successful!';
    // Redirect or load another page
    setTimeout(() => {
      window.location.href = 'dashboard.html'; // You can create this page
    }, 1000);
  } else {
    document.getElementById('message').style.color = '#ff6666';
    document.getElementById('message').textContent = 'Invalid username or password.';
  }
});
