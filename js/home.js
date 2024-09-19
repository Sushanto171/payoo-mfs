const addMoneyButton = document.getElementById('add-money-button');
addMoneyButton.addEventListener('click', function(event){
    event.preventDefault();
    const inputAmount = document.getElementById('input-amount').value;
    const password = document.getElementById('password').value;
    console.log(inputAmount, password);
    document.getElementById('password').value = '';
    document.getElementById('input-amount').value='';

    if(password=== '1234'){
        // console.log('adding money to your account')
        const accountBalance=document.getElementById('account-balance').innerText;
        const accountBalanceNumber = parseInt(accountBalance);
        const inputAmountNumber = Number(inputAmount);
        const updateBalance = accountBalanceNumber + inputAmountNumber;
        document.getElementById('account-balance').innerText =updateBalance;
    }
    else{
        alert('Failed to add money! Please try again.')
    }
})
