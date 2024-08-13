import './style.scss'

//modal
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const button = document.getElementById("aceptar");

window.onload = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}
button.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




