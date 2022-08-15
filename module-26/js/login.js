console.log('login in a js file');
// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    //step-2: get the eamil address inside the email input field
    // always remender to use ,valu to get tet from an inout field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);
    // //step-3: get password
    // 3-1: set id on the html Element
    // 3-2: get the Element
    // 3-3: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log('password');
    // Danger: DO NOT VERIFY enmail address on the client side 
    // step-4: Verify email and password
    if (email === 'alauddin@gmail.com' && password === 'admin') {
        window.location.href = 'bank.html';
    } else {
        alert('Invalid email or password');
    }
})