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
};

//animations

document.addEventListener('DOMContentLoaded', function () {
  // Removemos la clase 'no-transition' para activar las transiciones solo después de que la página ha cargado
  const hiddenElement = document.querySelectorAll('.hidden');
  hiddenElement.forEach(element => {
    element.classList.add('no-transition')
  });

  // Configuramos el Intersection Observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Deja de observar el elemento después de que se ha animado
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  // Observamos el elemento con el ID 'hidden'
  hiddenElement.forEach(element => {
    observer.observe(element);
  });
});





