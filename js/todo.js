"use strict"
document.addEventListener("DOMContentLoaded", function(event) {

  var personRegister = JSON.parse(localStorage.getItem('personRegister') || "[]");
  var taskList       = JSON.parse(localStorage.getItem('taskList') || "[]");

  if (localStorage.getItem('personLogin')) {
    var personLogin = JSON.parse(localStorage.getItem('personLogin'));
  }else{
    var personLogin = null;
  }

  // if (personLogin == null) {
  //   location.href = "http://localhost/F2I/tp/index.php";
  // }

  var root = new CheckUp();
  root.checkConnect(personLogin);
  root.checkRootCount()
  root.addTask(personLogin, taskList)
  root.showTask(personLogin, taskList)
  root.actionTask(personLogin, taskList)
  root.checkLogout()

//localStorage.removeItem("taskList");
//console.log(taskList);
});
