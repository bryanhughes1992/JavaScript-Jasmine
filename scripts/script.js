/**
 * ASSIGNMENT 02 - PASSWORD ENCRYPTION
 * Student: Bryan Hughes
 * Valid user: SeanDoyle
 * Valid password: FoiledByDoyle3030
 */

window.addEventListener("load", function() {
    //Store the entire form
    var userForm = document.forms.userForm;
    //Listen for the form to be submitted
    userForm.addEventListener("submit", function(event) {
        //Prevent the form from submitting.
        event.preventDefault();
        //Store the user input field
        var username = userForm.username.value;
        //Store the password input field
        var password = userForm.password.value;
        //Capture the hidden message field
        var outMsg = document.getElementById("outMsg");
        //Capture the return statement for the checkLogin() function
        var result = checkLogin(username, password);

        //Control structure for the results of 'checkLogin()'
        if(result === true) {
            outMsg.innerText = "Welcome Back!";
        } else if (result === "No username entered.") {
            outMsg.innerText = result;
            highlightUser();
        } else if (checkLogin(username, password) === "No password entered.") {
            outMsg.innerText = result;
            highlightPassword();
        } else if (checkLogin(username, password) === "Invalid Username or Password.") {
            outMsg.innerText = "Invalid Username or Password";
            highlightUser();
            highlightPassword();
        }
    });

    function checkLogin(user, pass) {
        //Hash the passed in password
        var hashedUserPass = md5Encrypt(pass);
        //Hash the actual password
        var validPass = md5Encrypt("FoiledByDoyle3030");
        //The valid user to compare against
        var validUser = "SeanDoyle";

        //Validate if the user field is empty
        if (user === "" || user === undefined || user === null || user === " "){
            return "No username entered.";
        } else if (pass === "" || pass === undefined || pass === null || pass === " ") {
            return "No password entered.";
        } else if (hashedUserPass !== validPass && user !== validUser) {
            return "Invalid Username or Password.";
        } else {
            return true;
        }
    }

    /**
   * MD5 Encryption function to encrypt provided string.
   * Returns string of encrypted hash.
   * @param {string} stringIn
   */
    function md5Encrypt(stringIn) {
        "use strict";
        var md5string = new CryptoJS.MD5(stringIn);
        return md5string.toString();
    }//END md5Encrypt

    //Set the 'user' input field to pink
    function highlightUser() {
        username.focus();
        username.style.backgroundColor = "pink";
    }
    //Set the 'password' input field to pink
    function highlightPassword() {
        password.focus();
        password.style.backgroundColor = "pink";
    }
});