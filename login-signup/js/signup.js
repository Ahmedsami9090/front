var submitBtn = document.querySelector("#submitBtn");
var newName = document.querySelector("#newUserName");
var newMail = document.querySelector("#newUserEmail");
var newPass = document.querySelector("#newUserPass");
var userData;
var userList;
var inputList = document.querySelectorAll("input");
var nameRegex = false;
var mailRegex = false;
var passRegex = false;

if (localStorage.getItem("users") != null) {
  userList = JSON.parse(localStorage.getItem("users"));
} else {
  userList = [];
}

submitBtn.addEventListener("click", function () {
  userData = {
    name: newName.value,
    email: newMail.value,
    pass: newPass.value,
  };
  if(newName.value == "" || newMail.value == "" || newPass.value == ""){
    alert("Please fill all data")
  }
  if (!isEmptyInput() && inputValidity()) {
    userList.push(userData);
    localStorage.setItem("users", JSON.stringify(userList));
    clearInput();
    alert("Registered successfully");
    window.location.href = "login.html";
  }
});

function repeatCheck(id) {
  var userNames = [];
  var userMails = [];
  var el = document.getElementById(id);
  for (var i = 0; i < userList.length; i++) {
    userNames.push(userList[i].name);
    userMails.push(userList[i].email);
  }
  if (userNames.includes(newName.value)) {
    el.nextElementSibling.innerHTML = "Name already registered";
    el.nextElementSibling.classList.remove("d-none");
    return true;
  }
  if (userMails.includes(newMail.value)) {
    el.nextElementSibling.innerHTML = "email already registered";
    el.nextElementSibling.classList.remove("d-none");
    return true;
  }
  el.nextElementSibling.classList.add("d-none");
  return false;
}

function clearInput() {
  newName.value = "";
  newMail.value = "";
  newPass.value = "";
  for (var i = 0; i < inputList.length; i++) {
    inputList[i].classList.remove("is-valid");
    inputList[i].classList.remove("is-invalid");
  }
}

function inputValidStyle(element) {
  element.classList.add("is-valid");
  element.classList.remove("is-invalid");
}

function inputInvalidStyle(element) {
  element.classList.add("is-invalid");
  element.classList.remove("is-valid");
}
function isEmptyInput() {
  if (newName.value == "" || newMail.value == "" || newPass.value == "") {
    return true;
  } else {
    return false;
  }
}

for (var i = 0; i < inputList.length; i++) {
  inputList[i].addEventListener("input", function (e) {
    inputValidity(e.target.id, e.target.value);
    repeatCheck(e.target.id);
  });
}

function inputValidity(el, value) {
  var regex;
  var element = document.getElementById(el);
  if (el == "newUserName") {
    regex = /^[A-Z a-z]{3,50}$/;
    if (regex.test(value) == true && !repeatCheck(el)) {
      nameRegex = true;
      inputValidStyle(element);
    } else {
      inputInvalidStyle(element);
      nameRegex = false;
    }
  }
  if (el == "newUserEmail") {
    regex =
      /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    if (regex.test(value) == true && !repeatCheck(el)) {
      mailRegex = true;
      inputValidStyle(element);
    } else {
      inputInvalidStyle(element);
      mailRegex = false;
    }
  }
  if (el == "newUserPass") {
    // regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
    regex = /^[0-9]{4,8}$/;
    if (regex.test(value) == true) {
      passRegex = true;
      inputValidStyle(element);
    } else {
      inputInvalidStyle(element);
      passRegex = false;
    }
  }
  if (nameRegex && mailRegex && passRegex) {
    return true;
  } else {
    return false;
  }
}
