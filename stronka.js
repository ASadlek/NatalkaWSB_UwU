function dropDownMenu() {
  //tylko w mobinej, jakis if ktory blokujke opcje w pc wersji?
  var dropdowns = document.getElementsByClassName("box1-menu-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
      else {
        openDropdown.classList.add('show');
      }
    }
}

function animateBlackCircle() {
  var blackCircle = document.querySelector(".box3-circle-black");
  var greyCircle = document.querySelector(".box3-circle-grey");

  var windowHeight = window.innerHeight;
  var elementTop = greyCircle.getBoundingClientRect().top;
  var elementVisible = 250;
  var restOfTheScreen = (windowHeight - elementVisible);

  if (elementTop <= restOfTheScreen && elementTop >= restOfTheScreen - 390) { //390 bo wysokosc dlugosc animacji to 195px w dol (195*2)
    var restOfRestOfTheScreen = restOfTheScreen - elementTop;
    var newTop = (167 + (restOfRestOfTheScreen/2));
    blackCircle.style.setProperty("top", newTop +"px");
    showObrysy(false);
  } 
  else if (elementTop < restOfTheScreen - 390){
    showObrysy(true);
  }
  else {
    showObrysy(false);
    blackCircle.style.setProperty("top", "167px");
  }
  //top: 167px; <- minTop
  //top: 362px; <- maxTop
}

function showObrysy(boolean) {
  var obrysy = document.querySelectorAll(".box3-obrys");

  for (var i = 0; i < obrysy.length; i++) {
    if (boolean == true) {
      obrysy[i].classList.add("reveal");
    } else {
      obrysy[i].classList.remove("reveal");
    }
  }
}

window.addEventListener("scroll", animateBlackCircle);
