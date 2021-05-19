function getEle(id) {
    return document.getElementById(id)
}

getEle("changeDefault").addEventListener("click", function () {
    getEle("picture__main__whiteneck").style.display = "none";
    getEle("picture__main__white").style.display = "none";
    getEle("picture__main").style.display = "block";
    getEle("changeDefault").style.opacity = "0.7"
    getEle("changeWhite").style.opacity = "1";
    getEle("changeWhiteNeck").style.opacity = "1"
}, false);

getEle("changeWhite").addEventListener("click", function () {
    getEle("picture__main").style.display = "none";
    getEle("picture__main__white").style.display = "block";
    getEle("picture__main__whiteneck").style.display = "none";
    getEle("changeWhite").style.opacity = "0.7"
    getEle("changeDefault").style.opacity = "1";
    getEle("changeWhiteNeck").style.opacity = "1"

}, false);

getEle("changeWhiteNeck").addEventListener("click", function () {
    getEle("picture__main").style.display = "none";
    getEle("picture__main__white").style.display = "none";
    getEle("picture__main__whiteneck").style.display = "block";
    getEle("changeWhiteNeck").style.opacity = "0.7";
    getEle("changeDefault").style.opacity = "1";
    getEle("changeWhite").style.opacity = "1"


}, false);