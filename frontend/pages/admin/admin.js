// Admin Dashboard Logout Functionality
document.getElementById('logoutBtn').addEventListener('click', function() {
  localStorage.removeItem('token');
  alert('You have been logged out');
  window.location.href = '/login.html'; // Or redirect to any other page
});
