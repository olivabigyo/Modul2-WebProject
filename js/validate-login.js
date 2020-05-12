'use strict';
// This is vailla JS

// Add event listener to small
document.querySelector('#forgot').addEventListener('click', () => {
    alert('It happens, I understand.\nMaybe try one of these: \nzelda@hyrule.gov, Bok0bl1n \nprof.kukui@alola.edu, Kapur1k1 \nr.munroe@xkcd.com, correcthorsebatterystaple ');
});
// Add event listener to button
document.querySelector('#subm-sign-in-form').addEventListener('click', validateSignIn);
// It is not a submit button, but I want to submit with 'Enter' key
document.getElementById('pwd').addEventListener('keydown', function (event) {
    //console.log(event.keyCode);
    if (event.keyCode == 13) {
        document.getElementById('subm-sign-in-form').click();
    }
});

function validateSignIn(event) {
    // prevent reloading the page
    event.preventDefault();

    // clear the former error messages
    if (document.querySelector('span')) {
        document.querySelectorAll('form span').forEach(element => {
            element.remove();
        });
    }
    // create object for input data and error messages
    let dataLogin = {};
    let validationErrorsLogin = {};

    // Create properties for data

    dataLogin.email = document.querySelector('#emailLogin').value;
    dataLogin.pwd = document.querySelector('#pwd').value;
    console.log(dataLogin.email, dataLogin.pwd);

    // Email
    if (!dataLogin.email) {
        console.error('No Email');
        validationErrorsLogin.email = '* Please fill in this field';
    } else {
        console.info('Email present: ' + dataLogin.email);
    }
    // Password
    if (!dataLogin.pwd) {
        console.error('No Password');
        validationErrorsLogin.pwd = '* Please fill in this field';
    } else {
        console.info('Password present: ' + dataLogin.pwd);
    }


    // Test if email is an email
    let emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegExp.test(dataLogin.email)) {
        // Email is not a match
        validationErrorsLogin.email = '* Please enter a valid email address';
    } else {
        console.info('Email is valid');
    }

    // If there are errors
    if (Object.keys(validationErrorsLogin).length > 0) {
        // Display error messages
        displayErrorsLogin(validationErrorsLogin, dataLogin);
    } else {
        if ((dataLogin.email == 'zelda@hyrule.gov' && dataLogin.pwd == 'Bok0bl1n') ||
            (dataLogin.email == 'prof.kukui@alola.edu' && dataLogin.pwd == 'Kapur1k1') ||
            (dataLogin.email == 'r.munroe@xkcd.com' && dataLogin.pwd == 'correcthorsebatterystaple')) {
            // Send form to backend
            console.log('Sending form data');
            location = 'logged.html';
        } else {
            // Clear the input fields
            document.querySelector('#emailLogin').value = '';
            document.querySelector('#pwd').value = '';
            // inform user
            alert('Nice try! Maybe next time.');
        }
    }
}

// Function that will show errors in the page
function displayErrorsLogin(validationErrorsLogin) {
    if (validationErrorsLogin.email) {
        const errorContainer = document.createElement('span');
        errorContainer.innerHTML = validationErrorsLogin.email;
        document.querySelector('#emailLogin').after(errorContainer);
    }
    if (validationErrorsLogin.pwd) {
        const errorContainer = document.createElement('span');
        errorContainer.innerHTML = validationErrorsLogin.pwd;
        document.querySelector('#pwd').after(errorContainer);
    }
}
