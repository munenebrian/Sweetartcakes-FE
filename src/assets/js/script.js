// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "30%";
  }
}

/* Optional: Add active class to the current button (highlight it) */
var container = document.getElementById("btnContainer");
var btns = container.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// form data to whatsapp
function whatsapp(){
  var FirstName = document.getElementById("FirstName").value;
  var LastName = document.getElementById("LastName").value;
  var Email = document.getElementById("Email").value;
  var Phone = document.getElementById("Phone").value;
  var Cake = document.getElementById("Cake").value;
  var Date = document.getElementById("Date").value;
  var Venue = document.getElementById("Venue").value;
  var Budget = document.getElementById("Budget").value;

  var url = "https://wa.me/254721408076?text="
  +"* FirstName : * " + FirstName + "%0a"
  +"* LastName : * " + LastName + "%0a"
  +"* Email : * " + Email + "%0a"
  +"* Phone : * " + Phone + "%0a"
  +"* Cake : * " + Cake + "%0a"
  +"* Date : * " + Date + "%0a"
  +"* Venue : * " + Venue + "%0a"
  +"* Budget : * " + Budget ;

  window.open(url, '_blank').focus;

}