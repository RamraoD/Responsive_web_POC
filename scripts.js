$(document).ready(function () {
  initGallery();

  $("#navbarCollapse a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        900,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

var slideIndex, slides, dots, captionText;
function initGallery() {
  slideIndex = 0;
  slides = document.getElementsByClassName("imageholder");
  console.log(slides);
  slides[slideIndex].style.opacity = 1;
  console.log(slideIndex);

  captionText = document.querySelector(".captiontHolder.captionText");
  captionText.innerHTML = slides(slideIndex).querySelector(
    ".captionText"
  ).innerHTML;

  dots = [];
  var dotsContainer = document.getElementById("dotsContainer");

  for (var i = 0; i < slides.length; i++)
    var dot = document.createElement("span");
  dot.classList.add("dots");
  ditsContainer.append(dot);
  dots.push(dot);
}

function moveSlide(n) {
  var i, current, next;
  var moveSlideAnimClass = {
    forCurrent: "",
    forNext: "",
  };
}
