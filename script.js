document.addEventListener('DOMContentLoaded', function () {
    const appContainer = document.getElementById('app');
    let userData = {};

    function displayUserCard(userData) {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');
        userCard.innerHTML = `
            <h2>User Information</h2>
            <p><strong>First Name:</strong> ${userData.firstName}</p>
            <p><strong>Last Name:</strong> ${userData.lastName}</p>
            <p><strong>Country:</strong> ${userData.country}</p>
            <p><strong>Phone Number:</strong> ${userData.phoneNumber}</p>
            <p><strong>State:</strong> ${userData.state}</p>
            <p><strong>City:</strong> ${userData.city}</p>
            <p><strong>Village:</strong> ${userData.village}</p>
        `;

        const container = document.createElement('div');
        container.classList.add('container', 'dark-theme');
        container.appendChild(userCard);

        appContainer.innerHTML = '';
        appContainer.appendChild(container);
    }

    function showAlert(message, inputId) {
        const userInput = prompt(message);
        if (userInput !== null) {
            userData[inputId] = userInput;
            localStorage.setItem('userData', JSON.stringify(userData));
            displayUserCard(userData);
        }
    }

    const savedUserData = localStorage.getItem('userData');
    if (savedUserData) {
        userData = JSON.parse(savedUserData);
        displayUserCard(userData);
    } else {
        userData = {};
        showAlert('Enter your First Name:', 'firstName');
        showAlert('Enter your Last Name:', 'lastName');
        showAlert('Enter your Country:', 'country');
        showAlert('Enter your Phone Number:', 'phoneNumber');
        showAlert('Enter your State:', 'state');
        showAlert('Enter your City:', 'city');
        showAlert('Enter your Village:', 'village');
    }
});
