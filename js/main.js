"use strict"
document.addEventListener("DOMContentLoaded", function(event) {
    var personRegister = JSON.parse(localStorage.getItem('personRegister') || "[]");
    var personLogin = JSON.parse(localStorage.getItem('personLogin') || "[]");

    var root = new CheckUp();
    root.checkLogin(personRegister, personLogin)
    root.checkRegister(personRegister)
    root.checkRootCount()

    //console.log(checkUp);
    //localStorage.removeItem("personRegister");
    //console.log(personRegister.join(', '));
    console.log(personLogin);
    console.log("DOM loaded ...");
});
