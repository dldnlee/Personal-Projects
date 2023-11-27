




let a = 1
const pic = document.getElementById("change")

function prevSlide() {
  
  if(a > 1 ){
    a -= 1;  
    changeSlide();
  } else {
    null;
  }
  
}

function nextSlide() {
  if(a < 3) {
    a += 1;
    changeSlide();
  } else {
    null;
  }
}

function changeSlide() {
  if(a == 1) {
    pic.src = "brochure.png"
  } else if(a == 2) {
    pic.src = "img1.jpg"
  } else if(a == 3) {
    pic.src = "img2.jpg"
  } 
}