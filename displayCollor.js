function getEle(id) {
    return document.getElementById(id)
}

getEle("changeDefault").addEventListener("click", function () {
    getEle("picture__main__whiteneck").style.display = "none";
    getEle("picture__main__white").style.display = "none";
    getEle("picture__main").style.display = "block";
}, false);

getEle("changeWhite").addEventListener("click", function () {
    getEle("picture__main").style.display = "none";
    getEle("picture__main__white").style.display = "block";
    getEle("picture__main__whiteneck").style.display = "none";
}, false);

getEle("changeWhiteNeck").addEventListener("click", function () {
    getEle("picture__main").style.display = "none";
    getEle("picture__main__white").style.display = "none";
    getEle("picture__main__whiteneck").style.display = "block";
}, false);