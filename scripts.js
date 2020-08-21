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

  captionText = document.querySelector(".captionHolder .captionText");
  captionText.innerText = slides[slideIndex].querySelector(
    ".captionText"
  ).innerText;

  dots = [];
  var dotsContainer = document.getElementById("dotsContainer");

  for (var i = 0; i < slides.length; i++) {
    var dot = document.createElement("span");
    dot.classList.add("dots");
    dotsContainer.append(dot);
    dots.push(dot);
}
 dots[slideIndex].classList.add("active");
}
function plusSlides(n){
  moveSlide(slideIndex+n);
}
function moveSlide(n) {
  console.log(n)
  var i, current, next;
  var moveSlideAnimClass = {
    forCurrent: "",
    forNext: ""
  }
  if(n>slideIndex){
    if(n>=slides.length){n=0}
    moveSlideAnimClass.forCurrent="moveLeftCurrentSlide";
    moveSlideAnimClass.forNext="moveLeftNextSlide";
  }else if(n<slideIndex){
    if(n<0){n=slides.length-1}
    moveSlideAnimClass.forCurrent="moveRightCurrentSlide";
    moveSlideAnimClass.forNext="moveRightNextSlide";
  }
  if(n!=slideIndex) {
    next=slides[n];
    current=slides[slideIndex];
    console.log(next)
    console.log(current)
    for(i=0;i<slides.length;i++) {
      console.log("dattttt")
      slides[i].className="imageHolder";
      slides[i].style.opacity = 0;
      dots[i].classList.remove("active");
    }
    current.classList.add(moveSlideAnimClass.forCurrent);
    console.log(current)
    next.classList.add(moveSlideAnimClass.forNext);
    dots[n].classList.add("active");
    slideIndex=n;
  }
}
