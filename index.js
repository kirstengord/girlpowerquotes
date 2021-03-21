document.querySelector("button").addEventListener("click", function() {

    var currentImage = document.querySelector("img").getAttribute("src");
    var newImageNumber = (Math.floor(Math.random()*8) + 1);
    var newImage = "images/quote" + newImageNumber + ".png";
   
    while (currentImage === newImage) {
        var newImageNumber = (Math.floor(Math.random()*8) + 1);
        var newImage = "images/quote" + newImageNumber + ".png";
    }    
    
document.querySelector("img").setAttribute("src", "images/quote" + newImageNumber + ".png");
});


  