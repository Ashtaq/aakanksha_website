const ripple=document.querySelector('.ripple');
ripple.onmousemove = function (e){
  const x =e.pageX-ripple.offsetLeft;
  const y =e.pageY-ripple.offsetTop;

  ripple.style.setProperty('--x',x+'px');
  ripple.style.setProperty('--y',y+'px');

}

//----------------Slider ------------


var slides = document.querySelector('.slide');
var btns = document.querySelector('.btn');
let currentSlide= 1 ;


//javascript image slider---------
var manualNav=function(manual){
  slides.forEach((slide) => {
    slide.classList.remove('active');
    
    btns.forEach((btn) => {
      btn.classList.remove('active')
    });
    
  });

  slides[manual].classList.add('active');
  btns[manual].classList.add('active');
  
  
  btns.forEach(btn => {
    btn.addEventListner("click", () =>{
      manualNav(i);
      currentSlide= i;
    });    
  });
}

// -----------------mobile---------------------
    



//price slider--------------------------

  var slide = document.querySelector('input');
  var result = document.querySelector('.price-result');
  result.textContent = slide.value;
  slide.oninput= function(){
    result.textContent= this.value;

  }

  // -------------search filter---------

//   function myFunction() {
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("brand_fil");
//     li = ul.getElementsByTagName("li");
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }





// customer------------------------



  let marker = document.querySelector('#marker');
  let list = document.querySelectorAll('.customer_info .customer ul li');

  function moveIndicator(e){
  marker.style.left = e.offsetleft+'px';
  marker.style.left = e.offsetLeft+'px';
  }

  list.forEach(link => {
    link.addEventListner('mousemove', (e) => {
      moveIndicator(e.target);
    });
  });

// ----------------------login ---------------


