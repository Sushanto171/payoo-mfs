const loginBtn = document.getElementById('login-button');
loginBtn.addEventListener('click', function(event){
    event.preventDefault();
  const phoneNumber = document.getElementById('phone-number').value;
  console.log(phoneNumber)
  const password = document.getElementById('password').value;
  console.log(password)
})