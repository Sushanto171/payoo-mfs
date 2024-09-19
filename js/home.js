// add money section
const inputAddMoneyButton = document.getElementById('input-add-money');
inputAddMoneyButton.addEventListener('click', function(){
    const inputForm = document.getElementById('input-form');
    inputForm.classList.remove('hidden');
    const cashOut = document.getElementById('cash-out-form');
    cashOut.classList.add('hidden');
})
const addMoneyButton = document.getElementById('add-money-button');
addMoneyButton.addEventListener('click', function(event){
    event.preventDefault();
    const inputAmount = document.getElementById('input-amount').value;
    const password = document.getElementById('password').value;
    document.getElementById('password').value = '';
    document.getElementById('input-amount').value='';

    if(password=== '1234'){
        const accountBalance=document.getElementById('account-balance').innerText;
        const accountBalanceNumber = parseInt(accountBalance);
        const inputAmountNumber = Number(inputAmount);
        const updateBalance = accountBalanceNumber + inputAmountNumber;
        document.getElementById('account-balance').innerText =updateBalance;
        const inputForm = document.getElementById('input-form');
        inputForm.classList.add('hidden');
    }
    else{
        alert('Failed to add money! Please try again.')
    }

})

// cash out section
const cashOutBtn = document.getElementById('cash-out');
cashOutBtn.addEventListener('click', function(){
    const cashOut = document.getElementById('cash-out-form');
    cashOut.classList.remove('hidden');
    const inputForm = document.getElementById('input-form');
    inputForm.classList.add('hidden');
})
const cashOutButton = document.getElementById('cash-out-button');
cashOutButton.addEventListener('click', function(event){
    event.preventDefault();
    const inputAmount2 = document.getElementById('input-amount2').value;

    const password =document.getElementById('password2').value;
   if(password === '1234'){
    const accountBalance = document.getElementById("account-balance").innerText;
    const accountBalanceNumber = Number(accountBalance);
    const inputAmount2Number = Number(inputAmount2);
    const updateBalance = accountBalanceNumber - inputAmount2Number;
    document.getElementById("account-balance").innerText= updateBalance;
    document.getElementById('input-amount2').value ='';
    document.getElementById('password2').value = '';
    const cashOut = document.getElementById('cash-out-form');
    cashOut.classList.add('hidden');
}
else{
    alert('Failed to Cash Out! Please try again.')
}

})