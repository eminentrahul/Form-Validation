const form = document.getElementById('form');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordMatch = false;

function validateForm(){
    isValid = form.checkValidity();
    // Style main message form
    if (!isValid) {
        message.textContent = "Please fill all the fields!";
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }

    if (password1.value === password2.value) {
        passwordMatch = true;
        password1.style.color = 'green';
        password2.style.color = 'green';
    } else {
        passwordMatch = false;
        message.textContent = 'Make sure password match!';
        messageContainer.style.borderColor = 'red';
        message.style.color = 'red';
        password1.style.color = 'red';
        password2.style.color = 'red';
        return;
    }

    if (isValid && passwordMatch) {
        message.textContent = 'Registered Successfully!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
    
}

function storeData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.url.value,
        password: form.password.value //Encrypt this data before sending to server

    };

    console.log(user);
}

function processFormData(event) {
    event.preventDefault();
    // Validate Form
    validateForm();

    if (isValid && passwordMatch) {
        storeData();
    }
}

// Event Listers
form.addEventListener('submit', processFormData);