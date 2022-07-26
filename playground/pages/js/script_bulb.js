function changeImage() {
    const image = document.getElementById('myImage');
    const statusText = document.getElementById('bulb-status');

    const waitSeconds = 2;
    const miliSeconds = waitSeconds * 1000;

    if (image.src.match("bulbon")) {

        setTimeout(function() {
            image.src = "assets/pic_bulboff.gif"; 
        }, miliSeconds);

        statusText.innerHTML = "Off";
    } else {
        
        setTimeout(function() {
            image.src = "assets/pic_bulbon.gif";
        }, miliSeconds);
        
        statusText.innerHTML = "On";
    }
}