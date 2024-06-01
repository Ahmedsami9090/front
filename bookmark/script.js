var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");
var addBtn = document.getElementById("add-btn");
var showArea = document.getElementById("bookmarks");
var bkMarkHeader = document.getElementById("bk-marks-header");
var generalError = document.querySelector("#error-general");
var selectedInput = document.querySelectorAll(".form-control");
var bkMark;
var bkMarkList;
var nameRegex;
var urlRegex;
var nameRepeat = 0;
var urlRepeat = 0;

var errorMessages = [
  "Invalid URL",
  "Only <b>Letters</b> allowed, (3) Letters minimum",
  "Please fix above error(s)",
  "Please Fill all field(s) above",
  "Name added previously",
  "URL added previously",
];

if (localStorage.getItem("bkMarks") !== null) {
  bkMarkList = JSON.parse(localStorage.getItem("bkMarks"));
  showBkMarks();
} else {
  bkMarkList = [];
}
addBtn.addEventListener("click", function () {
  bkMark = {
    name: siteName.value,
    url: siteUrl.value,
  };

  if (
    nameRegex == 1 &&
    urlRegex == 1 &&
    nameRepeat == 0 &&
    nameRepeat == 0 &&
    urlRepeat == 0 &&
    bkMark.name != "" &&
    bkMark.url != ""
  ) {
    bkMarkList.push(bkMark);
    localStorage.setItem("bkMarks", JSON.stringify(bkMarkList));
    clearInput();
    generalError.classList.add("d-none");
  } else {
    generalError.innerHTML = errorMessages[2];
    generalError.classList.remove("d-none");
    if (bkMark.name == "" || bkMark.url == "") {
      generalError.innerHTML = errorMessages[3];
      generalError.classList.remove("d-none");
    }
  }
  showBkMarks();
});

function showBkMarks() {
  // add HTML code to index.html
  var box = ``;
  for (var i = 0; i < bkMarkList.length; i++) {
    box += `<div class="bk-item row py-2 border-top">
        <div class="col-2 d-flex align-items-center justify-content-center">
          <h2 class="fs-6">${i + 1}</h2>
        </div>
        <div class="col-6 d-flex align-items-center justify-content-center">
          <h2 class="fs-6">${bkMarkList[i].name}</h2>
        </div>
        <div class="col-2 d-flex align-items-center justify-content-center">
          <a href="${
            bkMarkList[i].url
          }" class="btn btn-primary" target="_blank">Visit</a>
        </div>
        <div class="col-2 d-flex align-items-center justify-content-center">
          <button id="delete-btn" onclick="deleteBkMark(${i})" class="btn btn-danger">Delete</button>
        </div>
    </div>`;
  }
  if (bkMarkList.length > 0) {
    bkMarkHeader.classList.remove("visually-hidden");
  } else {
    bkMarkHeader.classList.add("visually-hidden");
  }
  showArea.innerHTML = box;
}
function clearInput() {
  // clear inputs value after adding bookmark
  siteName.value = "";
  siteUrl.value = "";
  siteName.classList.remove("is-valid", "is-invalid");
  siteUrl.classList.remove("is-valid", "is-invalid");
}

function deleteBkMark(index) {
  // remove bookmark form list
  bkMarkList.splice(index, 1);
  localStorage.setItem("bkMarks", JSON.stringify(bkMarkList));
  showBkMarks();
}

for (var i = 0; i < selectedInput.length; i++) {
  // add validCheck function to inputs
  selectedInput[i].addEventListener("input", function (e) {
    validCheck(e.target.id, e.target.value);
    repeatCheck(e.target.value, e.target.id);
  });
}

function repeatCheck(value, id) {
  // check if bookmark is added previously
  var el = document.getElementById(id);
  if (id == "siteName") {
    for (var i = 0; i < bkMarkList.length; i++) {
      if (bkMarkList[i].name == value) {
        nameRepeat = 1;
        el.nextElementSibling.innerHTML = errorMessages[4];
        el.classList.add("is-invalid");
        el.classList.remove("is=valid");
        el.nextElementSibling.classList.remove("d-none");
        break;
      } else {
        nameRepeat = 0;
      }
    }
  }
  if (id == "siteUrl") {
    for (var i = 0; i < bkMarkList.length; i++) {
      if (bkMarkList[i].url == value) {
        urlRepeat = 1;
        el.nextElementSibling.innerHTML = errorMessages[5];
        el.classList.add("is-invalid");
        el.classList.remove("is=valid");
        el.nextElementSibling.classList.remove("d-none");
        break;
      } else {
        urlRepeat = 0;
      }
    }
  }
}

function validCheck(id, value) {
  // check the validity of name and URL added to inputs
  var regex = {
    siteName: /^[A-Za-z]{3,}$/,
    siteUrl:
      /[https:]?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/,
  };
  var el = document.getElementById(id);
  if (id == "siteName") {
    if (regex.siteName.test(value) == true) {
      el.classList.add("is-valid");
      el.classList.remove("is-invalid");
      el.nextElementSibling.classList.add("d-none");
      nameRegex = 1;
    } else {
      el.classList.add("is-invalid");
      el.classList.remove("is-valid");
      el.nextElementSibling.innerHTML = errorMessages[1];
      el.nextElementSibling.classList.remove("d-none");
      nameRegex = 0;
    }
  }
  if (id == "siteUrl") {
    if (regex.siteUrl.test(value) == true) {
      el.classList.add("is-valid");
      el.classList.remove("is-invalid");
      el.nextElementSibling.classList.add("d-none");
      urlRegex = 1;
    } else {
      el.classList.add("is-invalid");
      el.classList.remove("is=valid");
      el.nextElementSibling.innerHTML = errorMessages[0];
      el.nextElementSibling.classList.remove("d-none");
      urlRegex = 0;
    }
  }
}
