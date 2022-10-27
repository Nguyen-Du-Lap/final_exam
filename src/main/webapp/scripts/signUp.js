const form_signUp = document.getElementById('form_signUp');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const phoneNumber = document.getElementById('phoneNumber');
const address = document.getElementById('address');
 
form_signUp.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const phoneNumbeValuer = phoneNumber.value.trim();
    const addressValue = address.value.trim();

    if(emailValue === '') {
        setErrorFor(email, 'Vui lòng nhập vào email');
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Email không hợp lệ');
    } else {
        setSuccessFor(email);
    }

    if(passwordValue === '') {
        setErrorFor(password, 'Vui lòng nhập vào mật khẩu');
    } else if(passwordValue.length < 8) {
        setErrorFor(password, 'Mật khẩu phải có ít nhất 8 kí tự');
    } else {
        setSuccessFor(password);
    }

    if(password2Value === '') {
        setErrorFor(password2, 'Vui lòng nhập lại mật khẩu');
    } else if (password2Value !== passwordValue) {
        setErrorFor(password2, "Mật khẩu không khớp");
    } else {
        setSuccessFor(password2);
    }

    if(fnameValue === '') {
        setErrorForFName(fname, 'Vui lòng nhập họ của bạn');
    } else {
        setSuccessForFName(fname);
    }

    if(lnameValue === '') {
        setErrorForLName(lname, 'Vui lòng nhập tên của bạn');
    } else {
        setSuccessForLName(lname);
    }

    if(phoneNumbeValuer === '') {
        setErrorFor(phoneNumber, 'Vui lòng nhập số điện thoại của bạn');
    } else if(phoneNumbeValuer.length !== 10) {
        setErrorFor(phoneNumber, 'Số điện thoại không hợp lệ')
    } else {
        setSuccessFor(phoneNumber);
    }

    if(addressValue === '') {
        setErrorFor(address, 'Vui lòng nhập địa chỉ của bạn');
    } else {
        setSuccessFor(address);
    }
}
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'input error';
}
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'input success';
}
function setErrorForFName(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'input fname error';
}
function setSuccessForFName(input) {
    const formControl = input.parentElement;
    formControl.className = 'input fname success';
}
function setErrorForLName(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'input lname error';
}
function setSuccessForLName(input) {
    const formControl = input.parentElement;
    formControl.className = 'input lname success';
}
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}