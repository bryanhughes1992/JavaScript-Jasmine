/**
 * The checkLogin() function passes the 'pass' variable
 * through the md5Encrypt function and checks it against the
 * valid password and also the 'user' against the 'validUser' variable
 * @param {string} user
 * @param {string} pass
 * @returns {string, boolean}
 */
function checkLogin(user, pass) {
  //Hash the passed in password
  var hashedUserPass = md5Encrypt(pass);
  //Hash the actual password
  var validPass = md5Encrypt("FoiledByDoyle3030");
  //The valid user to compare against
  var validUser = "SeanDoyle";

  //If the user field is empty in anyway
  if (user === "" || user === undefined || user === null || user === " ") {
    return "No username entered.";
    //If the password is empty in anyway
  } else if (pass === "" || pass === undefined || pass === null || pass === " ") {
    return "No password entered.";
    //Both the username AND password need to be valid against the validUser and validPass
  } else if (hashedUserPass !== validPass && user !== validUser) {
    return "Invalid Username or Password.";
  } else {
    return true;
  }
}
