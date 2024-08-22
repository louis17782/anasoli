import './style.scss'

//modal
// const modal = document.getElementById("myModal");
// const span = document.getElementById("close");
// const ig = document.getElementById("igbutton");

// ig.onclick = function() {
//   modal.style.display = "block";
// };

// span.onclick = function() {
//   modal.style.display = "none";
// }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };
//animations

document.addEventListener('DOMContentLoaded', function () {
  const hiddenElement = document.querySelectorAll('.hidden');
  hiddenElement.forEach(element => {
    element.classList.add('no-transition')
  });

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  hiddenElement.forEach(element => {
    observer.observe(element);
  });
});





