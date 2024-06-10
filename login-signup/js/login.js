var userMail = document.querySelector("#userEmail");
var userPass = document.querySelector("#userPass");
var loginBtn = document.querySelector("#logBtn");
var signUpBtn = document.querySelector("#signUpBtn");
var alertMsg = document.querySelector("#alert-div");
var users = [];
var loginPage = document.querySelector("#loginPage");
var welcomePage = document.querySelector("#welcome-page");
var logOutBtn = document.querySelector("#logOutBtn");

users = JSON.parse(localStorage.getItem("users"));

loginBtn.addEventListener("click", function () {
  if (userMail.value == "" || userPass.value == "") {
    alertMsg.innerHTML = "Please fill the above fields";
    alertMsg.classList.remove("d-none");
  } else {
    if (users == null) {
      alertMsg.innerHTML = "E-mail not registered";
      alertMsg.classList.remove("d-none");
    } else {
      for (var i = 0; i < users.length; i++) {
        if (userMail.value == users[i].email) {
          if (userPass.value == users[i].pass) {
            alertMsg.classList.add("d-none");
            clearInput();
            validLogin(i);
            break;
          } else {
            alertMsg.innerHTML = "Wrong password";
            alertMsg.classList.remove("d-none");
            break;
          }
        } else {
          alertMsg.innerHTML = "E-mail not registered";
          alertMsg.classList.remove("d-none");
        }
      }
    }
  }
});

userMail.addEventListener("input", function (e) {
  regexCheck(e.target.id, e.target.value);
});

function regexCheck(id, value) {
  var el = document.getElementById(id);
  var regex;
  if (id == "userEmail") {
    regex =
      /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    if (regex.test(value) == true) {
      el.classList.add("is-valid");
      el.classList.remove("is-invalid");
      alertMsg.classList.add("d-none");
    } else {
      el.classList.remove("is-valid");
      el.classList.add("is-invalid");
      alertMsg.innerHTML = "please enter a valid E-mail";
      alertMsg.classList.remove("d-none");
    }
  }
}
function clearInput() {
  userMail.value = "";
  userPass.value = "";
  userMail.classList.remove("is-valid", "is-invalid");
}

function validLogin(i) {
  loginPage.classList.add("d-none");
  welcomePage.classList.remove("d-none");
  var h = document.createElement("h1");
  h.innerHTML = "Welcome " + users[i].name;
  welcomePage.prepend(h);
}

logOutBtn.addEventListener("click", function () {
  welcomePage.classList.add("d-none");
  loginPage.classList.remove("d-none");
});
