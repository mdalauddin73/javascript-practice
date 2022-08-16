/*
1. add event handler with the withdraw button
2. get the withdraw amount from the withdraw input field
2.5 Also make sure to convert the into a number by using parseFloat
3. Get previous withdraw total
4. Calculate total withdraw ammount
4.5 set withdraw total
5. Get the previous total
6. Calculate new balance total
6.5 set the new balance total
7. Clear the input field
*/

//setp-1:
document.getElementById('btn-withdraw').addEventListener('click', function () {
    //step-2:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmmountString = withdrawField.value;
    const newWithdrawAmmount = parseFloat(newWithdrawAmmountString);

    // Step-7:
    withdrawField.value = '';

    if (isNaN(newWithdrawAmmount)) {
        alert('Please enter a valid number');
        return;
    }

    //tep-3:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    //Step-5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithdrawAmmount > previousBalanceTotal) {
        alert('You do not have sufficient balance');
        return;
    }

    //Step-4
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // Step-6
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmmount;
    balanceTotalElement.innerText = newBalanceTotal;

})