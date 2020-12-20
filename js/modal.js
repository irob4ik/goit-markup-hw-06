
// close modal window 
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

// filter buttons in portfolio
function myFunctionAll() {
var xr = document.querySelectorAll(".portfolio-items");
var i, qty = xr.length;
xr[1].style.marginLeft = "30px";
xr[1].style.marginRight = "0px";
xr[2].style.marginLeft = "30px";
for (i = 0; i < qty; i++) {
if (xr[i].style.display === "none") {
xr[i].style.display = "block"; 
}}
}

function myFunctionWeb() {
var xr = document.querySelectorAll(".W");
var i, qty = xr.length;
for (i = 0; i < qty; i++) {
if (xr[i].style.display === "none") {
xr[i].style.display = "block";
}}

var xs = document.querySelectorAll(".P");
var i, qty = xs.length;                   
for (i = 0; i < qty; i++) {                    
xs[i].style.display = "none"; 
}   

var xs = document.querySelectorAll(".M");
var i, qty = xs.length;
for (i = 0; i < qty; i++) {
xs[i].style.display = "none"; 
}

var xs = document.querySelectorAll(".D");
var i, qty = xs.length;
for (i = 0; i < qty; i++) {
xs[i].style.display = "none";
}
}

function myFunctionApp() {
var xr = document.querySelectorAll(".P");
var i, qty = xr.length;
xr[0].style.marginLeft = "0";
for (i = 0; i < qty; i++) {                        
if (xr[i].style.display === "none") {
xr[i].style.display = "block"; }                        
}

var xs = document.querySelectorAll(".W");
var i, qty = xs.length;
for (i = 0; i < qty; i++) {
xs[i].style.display = "none";                        
}

var xs = document.querySelectorAll(".M");
var i, qty = xs.length;
for (i = 0; i < qty; i++) {
xs[i].style.display = "none";
}

var xs = document.querySelectorAll(".D");
var i, qty = xs.length;
for (i = 0; i < qty; i++) {
xs[i].style.display = "none";
}
}
function myFunctionDes() {
var xr = document.querySelectorAll(".D");
var i, qty = xr.length;
xr[0].style.marginLeft = "0";
xr[0].style.marginRight = "30px";
for (i = 0; i < qty; i++) {
if (xr[i].style.display === "none") {
xr[i].style.display = "block";
}}

var xs = document.querySelectorAll(".W");
var i, qty = xs.length;
for (i = 0; i < qty; i++) {
xs[i].style.display = "none";
}

var xs = document.querySelectorAll(".M");
var i, qty = xs.length;
for (i = 0; i < qty; i++) {
xs[i].style.display = "none";
}

var xs = document.querySelectorAll(".P");
var i, qty = xs.length;
for (i = 0; i < qty; i++) {
xs[i].style.display = "none";
  }
} 

function myFunctionMar() {
var xr = document.querySelectorAll(".M");
var i, qty = xr.length;
for (i = 0; i < qty; i++) {
if (xr[i].style.display === "none") {
xr[i].style.display = "block";
}
}

var xs = document.querySelectorAll(".W");
var i, qty = xs.length;
for (i = 0; i < qty; i++) {
xs[i].style.display = "none";
}

var xs = document.querySelectorAll(".D");
var i, qty = xs.length;
for (i = 0; i < qty; i++) {
xs[i].style.display = "none";
}

var xs = document.querySelectorAll(".P");
var i, qty = xs.length;
for (i = 0; i < qty; i++) {
xs[i].style.display = "none";
}
} 
       
//Enables or disables a submit button depending
//on whether a checkbox has been ticked or not.
function terms_changed(termsCheckBox) {    
    if (termsCheckBox.checked) {        
        document.getElementById("submit_button").disabled = false;
    } else {        
        document.getElementById("submit_button").disabled = true;
    }
}   
