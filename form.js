const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');
  const hobbies = document.querySelectorAll('input[name="hobbies"]:checked');
  const terms = document.getElementById('terms').checked;
  
  const errorMsg = document.getElementById('errorMsg');
  const successMsg = document.getElementById('successMsg');
  
  // Reset previous messages
  errorMsg.textContent = '';
  successMsg.textContent = '';
  
  // Validation
  if (name === '') {
    errorMsg.textContent = 'Name is required!';
    return;
  }
  
  if (email === '' || !email.includes('@')) {
    errorMsg.textContent = 'Valid Email is required!';
    return;
  }
  
  if (password.length < 6) {
    errorMsg.textContent = 'Password must be at least 6 characters!';
    return;
  }
  
  if (!gender) {
    errorMsg.textContent = 'Please select your gender!';
    return;
  }
  
  if (hobbies.length === 0) {
    errorMsg.textContent = 'Please select at least one hobby!';
    return;
  }
  
  if (!terms) {
    errorMsg.textContent = 'You must accept the terms & conditions!';
    return;
  }
  
  // If all ok
  successMsg.textContent = 'Form Submitted Successfully! 🎉';
  
  setTimeout(() => {
    form.reset();
    successMsg.textContent = '';
  }, 2000);
});