// This is vailla JS


// Add event listener to button
// document.querySelector('#subm-sign-in-form').addEventListener('click', validateSignIn);
document.querySelector('#subm-sign-up-form').addEventListener('click', validateSignUp);

function validateSignUp (event) {
     // prevent reloading the page
    event.preventDefault();

    // clear the former error messages
    if(document.querySelector('span')){
        document.querySelectorAll('form span').forEach(element => {
          element.remove();
        });
      }
    // create object for input data and error messages
    let data = {};
    let validationErrors = {};

    // Create properties for data
    data.firstName = document.querySelector('#firstname').value;
    data.lastName = document.querySelector('#lastname').value;
    data.childFirstName = document.querySelector('#ch-firstname').value;
    data.childLastName = document.querySelector('#ch-lastname').value;
    data.childBirthDate = document.querySelector('#ch-birth').value;
    data.email = document.querySelector('#email').value;
    data.phone = document.querySelector('#phone').value;
    // data.message = document.querySelector('#message').value;
    data.agb = document.querySelector('#checkboxAGB').checked;
    // data.news = document.querySelector('#checkboxNews').checked;
    // console.log(data.agb);

    // First Name
    if (!data.firstName) {
        console.error('No First Name');
        validationErrors.firstName = '* Please fill in this field';
    } else {
        console.info('First Name present: '+ data.firstName);
    }
    // Last Name
    if (!data.lastName) {
        console.error('No Last Name');
        validationErrors.lastName = '* Please fill in this field';
    } else {
        console.info('Last Name present: '+ data.lastName);
    }
    // Child First Name
    if (!data.childFirstName) {
        console.error('No Child First Name');
        validationErrors.childFirstName = "* Please fill in this field";
    } else {
        console.info("Child's First Name present: "+ data.childFirstName);
    }
    // Child Last Name
    if (!data.childLastName) {
        console.error("No Child's Last Name");
        validationErrors.childLastName = "* Please fill in this field";
    } else {
        console.info("Child's Last Name present: "+ data.childLastName);
    }
    // Child Birth Date
    if (!data.childBirthDate) {
        console.error('No Child Birth Date');
        validationErrors.childBirthDate = '* Please fill in this field';
    } else {
        console.info('Birth Date present: '+ data.childBirthDate);
}
    // Email
    if (!data.email) {
        console.error('No Email');
        validationErrors.email = '* Please fill in this field';
    } else {
        console.info('Email present: '+ data.email);
    }

    // Test if email is an email
    let emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegExp.test(data.email)) {
        // Email is not a match
        validationErrors.email = '* Please enter a valid email address';
    } else {
        console.info('Email is valid');
    }

    // Phone
    if (!data.phone) {
        console.error('No Phone');
        // validationErrors.email = '* Please fill this field';
    } else {
        console.info('Phone number present: '+ data.phone);
    }

    // Test if phone is a phone number
    let phoneRegExp = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    if (!phoneRegExp.test(data.phone)) {
        // Phone is not a match
        validationErrors.phone = '* Please enter a phone number';
    } else {
        console.info('Phone is valid');
    }

    // Message
    // if (!data.message) {
    //     console.error('No message');
    //     validationErrors.message = '* No message';
    // } else {
    //     console.info('Message present: '+ data.message);
    //     // Test if message min 8 char
    //     if (data.message.length < 8) {
    //         console.error('Not enough text');
    //         validationErrors.messageLength = '* Please write min. 8 characters. We love to read!';
    //     } else {
    //         console.info('Enough text');
    //     }
    // }

    // Terms and conditions checkbox
    if (!data.agb) {
        console.error('Not checked');
        validationErrors.agb = '* Please be sure to read and accept the terms and conditions';
    } else {
        console.info('Terms and conditions checked');
    }



    // If there are errors
    if(Object.keys(validationErrors).length > 0) {
        // Display error messages
        displayErrors(validationErrors, data);
    } else {
        // Send form to backend
        console.log('Sending form data');
        // Clear the input fields
        document.querySelector('#firstname').value = '';
        document.querySelector('#lastname').value = '';
        document.querySelector('#ch-firstname').value = '';
        document.querySelector('#ch-lastname').value = '';
        document.querySelector('#ch-birth').value = '';
        document.querySelector('#email').value = '';
        document.querySelector('#phone').value = '';
        document.querySelector('#checkboxAGB').checked = false;
        document.querySelector('#checkboxNews').checked = false;
        // inform user
        alert('Thanks');
    }
}

// Function that will show errors in the page
function displayErrors(validationErrors) {

    if (validationErrors.firstName) {
        const errorContainer = document.createElement('span');
        errorContainer.innerHTML = validationErrors.firstName;
        document.querySelector('#firstname').after(errorContainer);
    }

    if (validationErrors.lastName) {
        const errorContainer = document.createElement('span');
        errorContainer.innerHTML = validationErrors.lastName;
        document.querySelector('#lastname').after(errorContainer);
    }

    if (validationErrors.childFirstName) {
        const errorContainer = document.createElement('span');
        errorContainer.innerHTML = validationErrors.childFirstName;
        document.querySelector('#ch-firstname').after(errorContainer);
    }

    if (validationErrors.childLastName) {
        const errorContainer = document.createElement('span');
        errorContainer.innerHTML = validationErrors.childLastName;
        document.querySelector('#ch-lastname').after(errorContainer);
    }

    if (validationErrors.childBirthDate) {
        const errorContainer = document.createElement('span');
        errorContainer.innerHTML = validationErrors.childBirthDate;
        document.querySelector('#ch-birth').after(errorContainer);
    }

    if (validationErrors.email) {
        const errorContainer = document.createElement('span');
        errorContainer.innerHTML = validationErrors.email;
        document.querySelector('#email').after(errorContainer);
    }

    if (validationErrors.phone) {
        const errorContainer = document.createElement('span');
        errorContainer.innerHTML = validationErrors.phone;
        document.querySelector('#phone').after(errorContainer);
    }

    // if (validationErrors.message) {
    //     const errorContainer = document.createElement('span');
    //     errorContainer.innerHTML = validationErrors.message;
    //     document.querySelector('#message').after(errorContainer);
    // }

    // if (validationErrors.messageLength) {
    //     const errorContainer = document.createElement('span');
    //     errorContainer.innerHTML = validationErrors.messageLength;
    //     document.querySelector('#message').after(errorContainer);
    // }

    if (validationErrors.agb) {
        const errorContainer = document.createElement('span');
        errorContainer.innerHTML = validationErrors.agb;
        document.querySelector('label.agb').after(errorContainer);
    }
}

 
