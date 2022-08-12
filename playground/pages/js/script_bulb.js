function changeImage() {

    const image = document.getElementById('myImage');
    const statusText = document.getElementById('bulb-status');

    const waitSeconds = 2;
    const miliSeconds = waitSeconds * 1000;

    console.log("Button clicked")

    if (image.src.match("bulbon")) {
        
        setTimeout(function() {
            image.src = "assets/pic_bulboff.gif"; 
            console.log("Turning off . . .")
        }, miliSeconds);

        statusText.innerHTML = "Off";
        console.log("Turned off! complete")

    } else {
        
        setTimeout(function() {
            image.src = "assets/pic_bulbon.gif";
            console.log("Turning on . . .")
        }, miliSeconds);
        
        statusText.innerHTML = "On";
        console.log("Turned on! complete")
    }
}