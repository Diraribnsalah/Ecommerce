const icon = document.querySelector(".icon");
const a = document.querySelector("a");
const box = document.querySelector(".box");
const xMark = document.querySelector(".xmark");
const eyeIcon = document.querySelector(".show");
var inp = document.querySelector(".password");
let cart = document.querySelector(".cart");
let dataPro = [];
let list = [];
// add class to icon

function Control() {
  if (document.querySelector("body").clientWidth <= 665) {
    icon.classList.add("span");
    a.style.display = "none";
  } else {
    icon.classList.remove("span");
    a.style.display = "inline";
    xMark.style.display = "none";
  }
}
Control();
window.onresize = function () {
  Control();
};
function showBox() {
  box.classList.add("ul");
  xMark.style.display = "inline";
}
function hideBox() {
  box.classList.remove("ul");
  xMark.style.display = "none";
}
// function for showing password
let mood = "show";
function showPassword() {
  if (mood === "show") {
    eyeIcon.innerHTML = `<i class="fa-solid fa-eye"></i>`;
    inp.type = "text";
    mood = "hide";
  } else {
    eyeIcon.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`;
    inp.type = "password";
    mood = "show";
  }
}

// js code for fetching the data
let tbody = document.querySelector("tbody");
const api = "https://fakestoreapi.com/products";
async function getData() {
  const response = await fetch(api);
  let data = await response.json();
  list.push(data);
  data.map((content, index) => {
    tbody.innerHTML += `
       <tr>
                <td> ${content.id}</td>
                <td> ${content.title} </td>
                <td class="PRICE"> ${content.price}$</td>
                <td><img loading="lazy" src=" ${content.image}"></td>
                <td><button  onclick="showInfOnCartBox(${index})">Select</button></td>
            </tr>`;
  });
}
getData();
const cartBox = document.querySelector(".cartBox");
const bag = document.querySelector(".bag");
const countEle = document.querySelector(".countSpan");
// function for showing the cartBox
function showCartBox() {
  cartBox.classList.add("info");
  bag.style.display = "none";
}
// function for hiding the cartBox
function hideCartBox() {
  cartBox.classList.remove("info");
  bag.style.display = "inline";
}

// function for showing the informations on the cartBox
const total = document.querySelector(".total");
async function showInfOnCartBox(i) {
  let count;
  count = parseInt(countEle.textContent);
  count++;
  countEle.textContent = count;
  const response = await fetch(api);
  const data = await response.json();
  cart.innerHTML = "";
  dataPro.push(data[i]);
  for (let i = 0; i < dataPro.length; i++) {
    document.querySelector(".cart").innerHTML += `
    <div class="div"> 
      <div class="imgBox">
              <img src=" ${dataPro[i].image}">
             </div>
             <div class="price"> ${dataPro[i].price}$</div>
             <span class="trash" onclick="deleteProduct(${dataPro[i].price},${i})"><i class="fa-solid fa-trash"></i></span>
    </div>
   `;
  }
  // total price
  var totalPrice;
  totalPrice = +total.innerHTML;
  totalPrice += +data[i].price;
  total.innerHTML = totalPrice.toFixed(3);
  showCartBox();
}
// function for deleting the products of the cartBox

async function deleteProduct(price, i) {
  
  let  totalPrice;
  if (+total.textContent > 0) {
    totalPrice = +total.textContent;
    totalPrice -= price;
    total.textContent = totalPrice.toFixed(3);
  }
  if(+countEle.textContent>0) {
     let count;
     count = parseInt(countEle.textContent);
     count--;
    countEle.textContent = count;
  }
   console.log(dataPro);
  dataPro.splice(i, 1);
  cart.innerHTML = "";
  for (let i = 0; i < dataPro.length; i++) {
    document.querySelector(".cart").innerHTML += `
   <div class="div"> 
     <div class="imgBox">
             <img src=" ${dataPro[i].image}">
            </div>
            <div class="price"> ${dataPro[i].price}$</div>
            <span class="trash" onclick="deleteProduct(${dataPro[i].price},${i})"><i class="fa-solid fa-trash"></i></span>
   </div>
  `;
  }
}
// search function
var Search = document.querySelector(".Search");
function resetData() {
  if (Search.value === "") {
    getData();
  }
}
async function search() {
  data = list[0];
  for (let i = 0; i < data.length; i++) {
    if (Search.value != "") {
      if (data[i].title.includes(Search.value)) tbody.innerHTML = "";
      {
        tbody.innerHTML += `
         <tr>
                  <td> ${data[i].id}</td>
                  <td> ${data[i].title} </td>
                  <td class="PRICE"> ${data[i].price}$</td>
                  <td><img loading="lazy" src=" ${data[i].image}"></td>
                  <td><button onclick="showInfOnCartBox(${i})">Select</button></td>
              </tr>`;
      }
    }
  }
}
// function for buying the selected elements on the cartBox
function buyPro() {
  dataPro.splice(0);
  cart.innerHTML = "";
  for (let i = 0; i < dataPro.length; i++) {
    document.querySelector(".cart").innerHTML += `
    <div class="div"> 
      <div class="imgBox">
              <img src=" ${dataPro[i].image}">
             </div>
             <div class="price"> ${dataPro[i].price}$</div>
             <span class="trash" onclick="deleteProduct(${dataPro[i].price},${i})"><i class="fa-solid fa-trash"></i></span>
    </div>
   `;
  }
  total.innerHTML = "0";
  countEle.innerHTML = "0";
  alert("the purechase was completed successfuly");
  cartBox.classList.remove("info");
  bag.style.display = "inline";
}
