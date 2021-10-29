var index = 1;

const moveTo = (e) => { showSlide(index = e); }
const changeSlide = (e) => { showSlide(index += e); }

const showSlide = (e) => {
    
    var i;
    const img = document.querySelectorAll('img');
    const sliders = document.querySelectorAll('.slider-indicators span');

    (e > img.length) ? (index = 1) : null;
    (e < 1) ? (index = img.length) : null;

    for(i = 0; i < img.length; i++){
        img[i].style.opacity = '0';
    }

    for(i = 0; i < sliders.length; i++){
        sliders[i].style.background = 'transparent';
    }

    img[index - 1].style.opacity = '1';
    sliders[index - 1].style.background = 'white';

}

showSlide(index);