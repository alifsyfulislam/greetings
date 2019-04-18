var cardImg = document.querySelector('.card_img');
var shareButton = document.querySelector('.share_button');

var overlay = document.querySelector('.overlay');
var overlay2 = document.querySelector('.overlay2');
var overlayContent = document.querySelector('.overlay_content');
var overlayButton = document.querySelector('.overlay_button');

overlayContent.value = "Sending you eid wishes, Keep me in your prayers!";

var images = [
    'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg'
];
var slideIndex = 0;
var lastIndex = images.length;
showSlides(slideIndex);

function plusSlides(n) {
    if (n<0){
        showSlides(slideIndex -= n)
    }
    else if (n<lastIndex) {
        showSlides(slideIndex += n);
    }
}


function showSlides(n) {
    if (n<lastIndex){
        cardImg.src = images[n];
        console.log(n);
    }

    else {
        slideIndex = 0;
        cardImg.src = images[0];
        console.log(n);
    }
}


overlayButton.addEventListener('click',function () {
    overlay2.style.display = "block";
    shareButton.style.display = "block";
    overlay2.innerHTML = overlayContent.value;
    overlay.style.display = "none";
})

overlay2.addEventListener('click',function () {
    shareButton.style.display = "none";
    overlay2.style.display = "none";
    overlay.style.display = "block";
})



