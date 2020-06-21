let slideIndex = 0;

var rightToLeft
let slides = document.getElementsByClassName("bg-center");
let preIndex;

showDropdown = (target) => {
    target.lastElementChild.classList.add("block");
    target.lastElementChild.classList.remove("hidden");
};

hideDropdown = (target) => {
    target.lastElementChild.classList.add("hidden");
    target.lastElementChild.classList.remove("block");
};

plusSlides = (n) => {
    if (n < 0) {
        rightToLeft = false;
    } else {
        rightToLeft = true;
    }
    showSlides((slideIndex += n));
};

currentSlide = (n) => {
    showSlides((slideIndex = n));
};

showSlides = (n) => {
    let i;
    if (n > slides.length - 1) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    if (rightToLeft === undefined && !rightToLeft) {
    } else if (rightToLeft) {
        if (slideIndex - 1 < 0) {
            preIndex = slides.length - 1;
        } else {
            preIndex = slideIndex - 1;
        }
    } else if (!rightToLeft) {
        if (slideIndex + 1 > slides.length - 1) {
            preIndex = 0;
        } else {
            preIndex = slideIndex + 1;
        }
    }{

    }
    for (i = 0; i < slides.length; i++) {
        if (!document.getElementsByClassName("bg-center")[i].classList.contains("hidden") && i != preIndex) {
            slides[i].classList.add("hidden");
        }
    }
    if (preIndex >= 0) {
        slides[preIndex].classList.add("fade-out");
        slides[preIndex].classList.add("z-20");
    }
    slides[slideIndex].classList.remove("hidden");
    if (slides[preIndex] + 1) {
        setTimeout(() => {
            slides[preIndex].classList.add("hidden");
            slides[preIndex].classList.remove("fade-out");
            slides[preIndex].classList.remove("z-20");
        }, 500);
    }
};
showSlides(slideIndex);