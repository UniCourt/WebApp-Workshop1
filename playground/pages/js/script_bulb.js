function changeImage() {
    const image = document.getElementById('myImage');
    const statusText = document.getElementById('bulb-status');

    if (image.src.match("bulbon")) {
        image.src = "assets/pic_bulboff.gif";
        statusText.innerHTML = "Off";
    } else {
        image.src = "assets/pic_bulbon.gif";
        statusText.innerHTML = "On";
    }
}