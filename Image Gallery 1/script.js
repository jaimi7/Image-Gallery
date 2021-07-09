var boxImg = document.getElementById('boxImg');
var displayImg = document.getElementById('displayImg');
function openImg(path) {
    boxImg.style.display = "flex";
    displayImg.src = path;
}
function closeImg() {
    boxImg.style.display = "none";
}