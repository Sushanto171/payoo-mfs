const addMoneyButton = document.getElementById('add-money-button');
addMoneyButton.addEventListener('click', function(event){
    event.preventDefault();
    const inputAmount = document.getElementById('input-amount').value;
    const password = document.getElementById('password').value;
    console.log(inputAmount, password);
    document.getElementById('password').value = '';
    document.getElementById('input-amount').value='';
})
