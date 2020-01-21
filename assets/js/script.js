(function () {

    let img = document.querySelectorAll(".slider__item1");
    let current = 0;

    slider()

    function slider() {
        for (let i = 0; i < img.length; i++) {
            img[i].classList.add("opacity");
        }
        img[current].classList.remove("opacity");
    }

    document.getElementById('sliderLeft').onclick = function () {
        if (current - 1 == -1) {
            current = img.length - 1;
        } else {
            current--;
        }
        slider();
    };

    document.getElementById('sliderRight').onclick = function () {
        if (current + 1 == img.length) {
            current = 0;
        } else {
            current++;
        }
        slider();
    }
})();
(function () {
    // var leftBtn = document.getElementById('sliderLeft');
    // var rightBtn = document.getElementById('sliderRight');

    let img = document.querySelectorAll(".work-time__item1");
    let current = 0;

    slider()

    function slider() {
        for (let i = 0; i < img.length; i++) {
            img[i].classList.add("opacity2");
        }
        img[current].classList.remove("opacity2");
    }

    document.getElementById('sliderBtnLeft').onclick = function () {
        if (current - 1 == -1) {
            current = img.length - 1;
        } else {
            current--;
        }
        slider();
    };

    document.getElementById('sliderBtnRight').onclick = function () {
        if (current + 1 == img.length) {
            current = 0;
        } else {
            current++;
        }
        slider();
    }
})();