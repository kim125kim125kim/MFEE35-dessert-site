
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


function clickbar1() {
  var bar_one = document.getElementById("hiddenbar1");
  var bar_two = document.getElementById("hiddenbar2");
  var bar_three = document.getElementById("hiddenbar3");
  var bar_four = document.getElementById("hiddenbar4");

  if (bar_one.style.display === "none") {
    bar_one.style.display = "block";
    bar_two.style.display = "none";
    bar_three.style.display = "none";
    bar_four.style.display = "none";

  }

  else {
    bar_one.style.display = "none";
    bar_two.style.display = "none";
    bar_three.style.display = "none";
    bar_four.style.display = "none";
  }


}
function clickbar2() {
  var bar_one = document.getElementById("hiddenbar1");
  var bar_two = document.getElementById("hiddenbar2");
  var bar_three = document.getElementById("hiddenbar3");
  var bar_four = document.getElementById("hiddenbar4");

  if (bar_two.style.display === "none") {
    bar_one.style.display = "none";
    bar_two.style.display = "block";
    bar_three.style.display = "none";
    bar_four.style.display = "none";

  }

  else {
    bar_one.style.display = "none";
    bar_two.style.display = "none";
    bar_three.style.display = "none";
    bar_four.style.display = "none";
  }


}
function clickbar3() {
  var bar_one = document.getElementById("hiddenbar1");
  var bar_two = document.getElementById("hiddenbar2");
  var bar_three = document.getElementById("hiddenbar3");
  var bar_four = document.getElementById("hiddenbar4");

  if (bar_three.style.display === "none") {
    bar_one.style.display = "none";
    bar_two.style.display = "none";
    bar_three.style.display = "block";
    bar_four.style.display = "none";

  }

  else {
    bar_one.style.display = "none";
    bar_two.style.display = "none";
    bar_three.style.display = "none";
    bar_four.style.display = "none";
  }


}
function clickbar4() {
  var bar_one = document.getElementById("hiddenbar1");
  var bar_two = document.getElementById("hiddenbar2");
  var bar_three = document.getElementById("hiddenbar3");
  var bar_four = document.getElementById("hiddenbar4");

  if (bar_four.style.display === "none") {
    bar_one.style.display = "none";
    bar_two.style.display = "none";
    bar_three.style.display = "none";
    bar_four.style.display = "block";

  }

  else {
    bar_one.style.display = "none";
    bar_two.style.display = "none";
    bar_three.style.display = "none";
    bar_four.style.display = "none";
  }


}

function search_bar(){
  var search_bar = document.querySelector("form.search_bar");
  var search_system=window.getComputedStyle(search_bar);
  var search_visibility=search_system.getPropertyValue("visibility");
// console.log(search_visibility);

  if (search_visibility==="hidden"){
    search_bar.setAttribute("style","visibility: visible;")
  }else{
    search_bar.setAttribute("style","visibility: hidden;")
  }
}

// 系列商品選擇器
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active"," ");
    this.className+=" active";
    
  });
}

function working(){
  window.alert("購物車功能製作中");
}
