// Wood (CFT) calculation

function woodCalculator(chairQty, tableQty, bedQty) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQty * perChairWood;
    const tablWood = tableQty * perTableWood;
    const bedWood = bedQty * perBedWood;

    const totalWood = chairWood + tablWood + bedWood;
    return totalWood;
}
const totalWood = woodCalculator(5, 3, 2);
console.log(totalWood);