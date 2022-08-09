function paperRequirement(firstbBookQty, secondBookQty, thirdBookQty) {
    const fristBookPage = 100 * firstbBookQty;
    const secondBookPage = 200 * secondBookQty;
    const thridBookPage = 300 * thirdBookQty;

    const totalPages = fristBookPage + secondBookPage + thridBookPage;
    return totalPages;
}
const bookTotalPages = paperRequirement(20, 3, 4);
console.log(bookTotalPages);