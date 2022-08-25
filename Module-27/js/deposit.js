document.getElementById('btn-deposit').addEventListener('click', function () {
    /*
    1. Get the element by id
    2. Get the value from the element
    3. Convert string value to a number
    */
    const newDepositAmount = getInputFieldValueById('deposit-field');

    // Get previous deposit total by id
    const previousDepositTotal = getTextElementVlaueById('deposit-total');

    // Calculate new deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;

    // Set deposit total value
    setTextElementValueById('deposit-total', newDepositTotal);

    // Get the previous balance by using the function
    const previousBalanceTotal = getTextElementVlaueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);

})