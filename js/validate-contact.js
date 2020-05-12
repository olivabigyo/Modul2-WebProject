'use strict';
// This is vailla JS


// Add event listener to button
document.querySelector('.submit-button').addEventListener('click', validateForm);

function validateForm(event) {
    // prevent reloading the page
    event.preventDefault();

    // clear the former error messages
    if (document.querySelector('span')) {
        document.querySelectorAll('form span').forEach(element => {
            element.remove();
        });
    }
    // create object for input data and error messages
    let data = {};
    let validationErrors = {};

    // Create properties for data
    data.name = document.querySelector('#name').value;
    data.email = document.querySelector('#email').value;
    data.message = document.querySelector('#message').value;
    data.agb = document.querySelector('#checkboxAGB').checked;
    data.news = document.querySelector('#checkboxNews').checked;
    // console.log(data.agb);

    // Name
    if (!data.name) {
        console.error('No Name');
        validationErrors.name = '* No name provided';
    } else {
        console.info('Name present: ' + data.name);
    }

    // Email
    if (!data.email) {
        console.error('No Email');
        validationErrors.email = '* No email provided';
    } else {
        console.info('Email present: ' + data.email);
    }
    // Test if email is an email

    let emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegExp.test(data.email)) {
        // Email is not a match
        validationErrors.email = '* Invalid Email Address';
    } else {
        console.info('Email is valid');
    }

    // Message
    if (!data.message) {
        console.error('No message');
        validationErrors.message = '* No message';
    } else {
        console.info('Message present: ' + data.message);
        // Test if message min 8 char
        if (data.message.length < 8) {
            console.error('Not enough text');
            validationErrors.messageLength = '* Please write min. 8 characters. We love to read!';
        } else {
            console.info('Enough text');
        }
    }

    // Terms and conditions checkbox
    if (!data.agb) {
        console.error('Not checked');
        validationErrors.agb = '* Please be sure to read and accept the terms and conditions';
    } else {
        console.info('Terms and conditions checked');
    }



    // If there are errors
    if (Object.keys(validationErrors).length > 0) {
        // Display error messages
        displayErrors(validationErrors, data);
    } else {
        // Send form to backend
        console.log('Sending form data');

        // Clear the input fields
        document.querySelector('#name').value = '';
        document.querySelector('#email').value = '';
        document.querySelector('#message').value = '';
        document.querySelector('#checkboxAGB').checked = false;
        document.querySelector('#checkboxNews').checked = false;
        // inform user
        alert('Thanks');
    }
}

// Function that will show errors in the page
function displayErrors(validationErrors) {

    if (validationErrors.name) {
        const errorContainer = document.createElement('span');
        errorContainer.innerHTML = validationErrors.name;
        document.querySelector('#name').after(errorContainer);
    }

    if (validationErrors.email) {
        const errorContainer = document.createElement('span');
        errorContainer.innerHTML = validationErrors.email;
        document.querySelector('#email').after(errorContainer);
    }

    if (validationErrors.message) {
        const errorContainer = document.createElement('span');
        errorContainer.innerHTML = validationErrors.message;
        document.querySelector('#message').after(errorContainer);
    }

    if (validationErrors.messageLength) {
        const errorContainer = document.createElement('span');
        errorContainer.innerHTML = validationErrors.messageLength;
        document.querySelector('#message').after(errorContainer);
    }

    if (validationErrors.agb) {
        const errorContainer = document.createElement('span');
        errorContainer.innerHTML = validationErrors.agb;
        document.querySelector('label.agb').after(errorContainer);
    }
}
