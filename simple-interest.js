// Simple Interest = (P x T x R)/100 

function simpleInterst(p, t, r) {
    const interestAmmount = (p * t * r) / 100;
    return interestAmmount;
}
const principal = 3000;
const setTime = 7;
const interestRate = 1;
const myInterestAmount = simpleInterst(principal, setTime, interestRate);
console.log(myInterestAmount);