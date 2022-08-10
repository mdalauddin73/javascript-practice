function multiplication(multyby) {
    for (i = 1; i <= 10; i++) {
        // const multyBy = 13;
        let num = multyby;
        num *= i;
        console.log(multyby, 'x', i, '=', num);
    }
}
const myMultyBy = 14;
multiplication(myMultyBy);
