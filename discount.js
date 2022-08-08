/*
1. if ticket <100, per ticket price: 100tk
2. if ticket >100, but <200 . First 100 ticket price will be 100tk, rest will be 90tk.
3. if purchase >200 tickets
    first 100 ---> 100tk
    101-200 ---> 90tk
    200 + ---> 70tk
*/
function ticketPrice(ticketQuantity) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restRate = 70;
    if (ticketQuantity <= 100) {
        const price = ticketQuantity * first100Rate;
        return price;
    } else if (ticketQuantity <= 200) {
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;

    } else {
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restRate;
        const totalCost = first100Price + second100Price + restTicketPrice;
        return totalCost;
    }
}
const getTicketQuantity = 201;
const totalPrice = ticketPrice(getTicketQuantity);
console.log(totalPrice);