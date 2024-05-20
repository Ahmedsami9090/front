var productName = document.getElementById("p-name");
var productCategory = document.getElementById("p-category");
var productPrice = document.getElementById("p-price");
var productImage = document.getElementById("formFile");
var productDesc = document.getElementById("p-description");
var addBtn = document.getElementById("add-btn");
var resetBtn = document.getElementById("reset-btn");
var search = document.getElementById("search");

addBtn.onclick = addProduct;
resetBtn.onclick = resetForm;
search.oninput = searchProduct;

var pList;
if (localStorage.getItem("product") !== null) {
  pList = JSON.parse(localStorage.getItem("product"));
  displayProduct();
} else {
  pList = [];
}
function addProduct() {
  var product = {
    pName: productName.value,
    pCat: productCategory.value,
    price: productPrice.value,
    pImg: `assets/${productImage.files[0].name}`,
    pDesc: productDesc.value,
  };
  if (
    product.pName == "" ||
    product.pCat == "" ||
    product.pDesc == "" ||
    product.price == ""
  ) {
    window.alert("please provide full data");
  } else {
    if (document.getElementById("add-btn").innerHTML == "Add Product") {
      pList.push(product);
    } else {
      pList.splice(currentIndex, 1, product);
      document.getElementById("add-btn").innerHTML = "Add Product";
    }
    localStorage.setItem("product", JSON.stringify(pList));
    displayProduct();
    resetForm();
    window.alert("product added successfully");
  }
}

function displayProduct() {
  var box = ``;
  for (var i = 0; i < pList.length; i++) {
    box += `<div class="col-md-4 col-sm-6">
    <div class="product border mt-3">
      <img src="${pList[i].pImg}" alt="" class="w-100" />
      <div class="details border p-2">
        <h2 class="h4">${pList[i].pName}</h2>
        <p class="border-bottom pb-2 text-secondary">
          ${pList[i].pDesc}
        </p>
        <p><span class="fw-bold">Price: </span><span>${pList[i].price}</span></p>
        <p><span class="fw-bold">category: </span><span>${pList[i].pCat}</span></p>
        <div class="text-center">
        <button  onclick="deleteProduct(${i})" class="btn btn-outline-danger w-75 my-3">Delete<i class="mx-2 fa fa-trash"></i></button>
        <button id="update-btn" onclick="updateItem(${i})" class="btn btn-outline-warning w-75">update<i class="mx-2 fa fa-edit"></i></button>
        </div>
      </div>
    </div>
  </div>`;
  }
  document.getElementById("row-body").innerHTML = box;
}
var currentIndex;
function deleteProduct(index) {
  pList.splice(index, 1);
  localStorage.setItem("product", JSON.stringify(pList));
  displayProduct();
}

function updateItem(index) {
  currentIndex = index;
  productName.value = pList[index].pName;
  productCategory.value = pList[index].pCat;
  productPrice.value = pList[index].price;
  productDesc.value = pList[index].pDesc;
  document.getElementById("add-btn").innerHTML = "Update product";
}

function resetForm() {
  productName.value = null;
  productCategory.value = null;
  productPrice.value = null;
  productImage.value = null;
  productDesc.value = null;
}

function searchProduct() {
  console.log(search.value);
  box = "";
  for (var i = 0; i < pList.length; i++) {
    if (
      pList[i].pName.toLowerCase().includes(search.value.toLowerCase()) == true
    ) {
      box += `<div class="col-md-4 col-sm-6">
    <div class="product">
      <img src="${pList[i].pImg}" alt="" class="w-100" />
      <div class="details border p-2">
        <h2 class="h4">${pList[i].pName}</h2>
        <p class="border-bottom pb-2 text-secondary">
          ${pList[i].pDesc}
        </p>
        <p><span class="fw-bold">Price: </span><span>${pList[i].price}</span></p>
        <p><span class="fw-bold">category: </span><span>${pList[i].pCat}</span></p>
        <div class="text-center">
        <button  onclick="deleteProduct(${i})" class="btn btn-outline-danger w-75 my-3">Delete<i class="mx-2 fa fa-trash"></i></button>
        <button id="update-btn" onclick="updateItem(${i})" class="btn btn-outline-warning w-75">update<i class="mx-2 fa fa-edit"></i></button>
        </div>
      </div>
    </div>
  </div>`;
    }
  }
  document.getElementById("row-body").innerHTML = box;
}
