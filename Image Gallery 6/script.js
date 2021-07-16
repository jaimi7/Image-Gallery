const images = document.querySelector(".images").children;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const page = document.querySelector(".page");
const item = 8;
let index = 1;
const changePage = Math.ceil(images.length / item);


prev.addEventListener("click", function () {
    index--;
    check();
    showItem();
})
next.addEventListener("click", function () {
    index++;
    check();
    showItem();
})

function check() {
    if (index == 1) {
        prev.classList.add("disabled");
    }
    else {
        prev.classList.remove("disabled");
    }
    if (index == changePage) {
        next.classList.add("disabled");
    }
    else {
        next.classList.remove("disabled");
    }
}

function showItem() {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove("show");
        images[i].classList.add("hide");
        if (i >= (index * item) - item && i < index * item) {
            images[i].classList.remove("hide");
            images[i].classList.add("show");
        }
        page.innerHTML = index;
    }
}
window.onload = function () {
    showItem();
    check();
}