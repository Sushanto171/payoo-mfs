const loginBtn = document.getElementById('login-button');
loginBtn.addEventListener('click', function(event){
    event.preventDefault();
  const phoneNumber = document.getElementById('phone-number').value;
  const password = document.getElementById('password').value;
 if(phoneNumber === '5' && password === '1234'){
    console.log('you are logged in');
    window.location.href = './home.html'
 }
 else {
    alert('Wrong phone number or password')
 }
 document.getElementById('phone-number').value= '';
 document.getElementById('password').value = '';
})