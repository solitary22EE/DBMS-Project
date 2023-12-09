function checkLogin(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'test' && password === 'test123') {
        // Show the gauge and buttons, hide the login form
        document.getElementById('gaugeContainer').style.display = 'block';
        document.getElementById('buttonsContainer').style.display = 'flex';
        document.getElementById('registerLink').style.display = 'none';
        document.getElementById('loginForm').style.display = 'none';
    } else {
        // Show the register link, hide the gauge and buttons
        document.getElementById('registerLink').style.display = 'block';
        document.getElementById('gaugeContainer').style.display = 'none';
        document.getElementById('buttonsContainer').style.display = 'none';
    }
}
