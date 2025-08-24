document.getElementById('log-out').addEventListener('click',function(){
    window.location.href="index.html"
})

//Reusable function
function inputValueConverted(id){
    return parseInt(document.getElementById(id).value);
}
function inputValue(id){
    return document.getElementById(id).value;
}
function innerText(id){
    return parseInt(document.getElementById(id).innerText);
}
function setInnerText(value){
    return document.getElementById('available-balance').innerText = value;
}

// Function to toggle
function handleToggle(id){
    const forms = document.getElementsByClassName('form')
    for(const form of forms){
        form.style.display = 'none';
    }
    document.getElementById(id).style.display = 'block';
}

// Btn toggle
function formBtnToggle(id){
    const formBtns = document.getElementsByClassName('form-btn')
    for(const btn of formBtns){
        btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
        btn.classList.add("border-gray-300");
    }

    document.getElementById(id).classList.remove("border-gray-300")
    document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874f20d]")
}

const transactionsData = [];

// Add Money feature
document.getElementById('add-Money-btn').addEventListener('click', function(e){
    e.preventDefault();

    const bank = inputValue('bank');
    const accountNumber = inputValue('Account-Number');
    const amount =inputValueConverted('Add-Amount');
    const pin =inputValueConverted('Pin-Number');

    if(accountNumber.length < 11 ){
        return alert('Please provide valid account number');
    }
    if(amount <=0 ){
        return alert('Invalid amount');
    }
    const validPin = 1234;
    if(pin !== validPin){
        return alert('Please provide valid pin number');
    }

    const availableBalance =innerText('available-balance');
    const totalNEwAvailableBalance = availableBalance + amount;
    setInnerText(totalNEwAvailableBalance);
//Add Money transactions
    const data = {
        name : 'Add Money',
        date : new Date().toLocaleString('en-US', { 
        dateStyle: 'short', 
        timeStyle: 'medium' 
    }),
        icon : 'images/wallet1.png'
    }
    transactionsData.unshift(data);
})

// Cash Out feature
document.getElementById('Withdraw-btn').addEventListener('click',function(e){
    e.preventDefault();

    const agentNumber = inputValue('Agent-Number');
    if(agentNumber.length < 11 ){
        return alert('Please provide valid agent number');
    }

    const WithdrawAmount =inputValueConverted('Withdraw-Amount');   
    const availableBalance =innerText('available-balance');
    if(WithdrawAmount<=0 || WithdrawAmount>availableBalance){
        return alert('Invalid amount');
    }

    const pin = inputValueConverted('Withdraw-Pin');
    const validPin = 1234;
    if(pin !== validPin){
        return alert('Please provide valid pin number');
    }

    const totalNEwAvailableBalance = availableBalance - WithdrawAmount;
    setInnerText(totalNEwAvailableBalance);
//Cash Out transactions
    const data = {
        name : 'Cash Out',
        date : new Date().toLocaleString('en-US', { 
        dateStyle: 'short', 
        timeStyle: 'medium' 
    }),
        icon : 'images/send1.png'
    }
    transactionsData.unshift(data);
})

// Transfer Money feature
document.getElementById('Transfer-btn').addEventListener('click',function(e){
    e.preventDefault();

    const transferNumber = inputValue('Transfer-Number');
    if(transferNumber.length < 11 ){
        return alert('Please provide valid agent number');
    }

    const transferAmount =inputValueConverted('Transfer-Amount');   
    const availableBalance =innerText('available-balance');
    if(transferAmount<=0 || transferAmount>availableBalance){
        return alert('Invalid amount');
    }

    const pin = inputValueConverted('Transfer-Pin');
    const validPin = 1234;
    if(pin !== validPin){
        return alert('Please provide valid pin number');
    }

    const totalNEwAvailableBalance = availableBalance - transferAmount;
    setInnerText(totalNEwAvailableBalance);
//Transfer Money transactions
    const data = {
        name : 'Transfer Money',
        date : new Date().toLocaleString('en-US', { 
        dateStyle: 'short', 
        timeStyle: 'medium' 
    }),
        icon : 'images/money1.png'
    }
    transactionsData.unshift(data);
})

// Pay Bill feature
document.getElementById('Pay-Bill-btn').addEventListener('click',function(e){
    e.preventDefault();

    const payBillNumber = inputValue('Pay-Bill-Number');
    if(payBillNumber.length < 11 ){
        return alert('Please provide valid biller number');
    }

    const payBillAmount =inputValueConverted('Pay-Bill-Amount');   
    const availableBalance =innerText('available-balance');
    if(payBillAmount<=0 || payBillAmount>availableBalance){
        return alert('Invalid amount');
    }

    const pin = inputValueConverted('Pay-Bill-Pin');
    const validPin = 1234;
    if(pin !== validPin){
        return alert('Please provide valid pin number');
    }

    const totalNEwAvailableBalance = availableBalance - payBillAmount;
    setInnerText(totalNEwAvailableBalance);
//Transfer Money transactions
    const data = {
        name : 'Pay Bill',
        date : new Date().toLocaleString('en-US', { 
        dateStyle: 'short', 
        timeStyle: 'medium' 
    }),
        icon : 'images/purse1.png'
    }
    transactionsData.unshift(data);
})

// Transaction History
document.getElementById('Transactions-History-btn').addEventListener('click', function(){
    const TransactionCardContainer = document.getElementById('Transaction-card-container');
    
    TransactionCardContainer.innerHTML = '';

    for(const data of transactionsData){
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="flex justify-between items-center bg-white p-4 mb-3 rounded-2xl">
                <div class="Transaction-left flex items-center gap-3">
                    <div class="bg-[#f4f5f7] rounded-full p-[0.8rem] "><img class="mx-auto" src="${data.icon}" alt=""></div>
                    <div>
                        <h3 class="text-[#080808b3]">${data.name}</h3>
                        <p class="text-[0.8rem] text-[#080808b3]">${data.date}</p>
                    </div>
                </div>
                <div class="Transaction-right"><i class="fa-solid fa-ellipsis-vertical text-[#080808b3]"></i></div>
            </div>
        `
        TransactionCardContainer.appendChild(div);
    }
})


// Toggle add money
document.getElementById('Add-Money-btn').addEventListener('click', function(){
    handleToggle('add-money-parent');
    formBtnToggle('Add-Money-btn')
})

// Toggle Cash Out
document.getElementById('Cash-Out-btn').addEventListener('click', function(){
    handleToggle('Cash-Out-parent');
    formBtnToggle('Cash-Out-btn');
})

// Toggle Transfer Money
document.getElementById('Transfer-Money-btn').addEventListener('click',function(){
    handleToggle('Transfer-Money-parent');
    formBtnToggle('Transfer-Money-btn');
})

// Toggle Get Bonus
document.getElementById('Get-Bonus-btn').addEventListener('click',function(){
    handleToggle('Get-Bonus-parent');
    formBtnToggle('Get-Bonus-btn');
})

// Toggle Pay-Bill
document.getElementById('Pay-btn').addEventListener('click',function(){
    handleToggle('Pay-Bill-parent');
    formBtnToggle('Pay-btn');
});

// Toggle Get Bonus
document.getElementById('Transactions-History-btn').addEventListener('click',function(){
    handleToggle('Transactions-History-parent');
    formBtnToggle('Transactions-History-btn');
});
