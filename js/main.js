const sliderImages = [
    "./image/slid1.jpg",
    "./image/slid2.jpg",
    "./image/slid3.jpg",
];
const sliderDom = document.getElementById("slider");
let currentImage=0;
function renderImages() {
    sliderImages.forEach((image) => {
        sliderDom.innerHTML += "<img src='" + image + "' class='slid' />";
    });
}

function clearImages() {
    const images = document.getElementsByClassName("slid");
    for (let i = 0; i < images.length; i++) {
        images[i].style.opacity = 0;
    }
}

function showImage(image) {
    clearImages();
    document.getElementsByClassName("slid")[image].style.opacity = 1;
    const button = document.getElementById("button_slider");
    const hedder = document.getElementById("hedder");
    if(document.getElementsByClassName("slid")[1].style.opacity==1){
        button.innerHTML="همین الان سرچ کن"
        hedder.innerHTML="یک کافه در نزدیکی خود پیدا کن"
    }else if(document.getElementsByClassName("slid")[0].style.opacity==1){
        button.innerHTML="اطلاعات بیشتر"
        hedder.innerHTML="نحوه درست کردن کافه میکس"
    }else {
        button.innerHTML="خرید کن"
        hedder.innerHTML="در محصولات ایران کافه جستجو کن"
    }
}


function current(){
    currentImage += 1
    if(currentImage>2){
        currentImage=0
    }
    showImage(currentImage)
}
function init() {
    renderImages();
    showImage(currentImage);
    setInterval(current,3000)



}

init();








