/*
1. add event listener to the deposit button
2. get deposit amount from the deposit input field
2.5. convert string deposit amount to a number type
3. clear the deposit input field after getting the value
4. get the previous deposit total
5. Calculate new deposit total and set the value to the deposit total
*/

//Step-1
document.getElementById('btn-deposit').addEventListener('click', function () {
    //Step-2
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // Step-3:
    depositField.value = '';

    // Step-4:
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // Step-5:
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

    // Step-6: get current balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // Step-7:
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total
    balanceTotalElement.innerText = newBalanceTotal;

})