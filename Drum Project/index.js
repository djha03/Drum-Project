
//Detecting button press on screen means on website.    
var numbersofDrumsButton = document.querySelectorAll(".drum").length;

for(var i=0; i<numbersofDrumsButton; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        
        buttonAnimation(buttonInnerHTML);

    });
}

//Detecting keyboard press.
document.addEventListener("keypress", function(event) {
    makeSound(event.key);

    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "d":
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;

        case "i":
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "v":
            var tom3= new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case "a":
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;

        case "k":
            var tom1= new Audio("sounds/crash.mp3");
            tom1.play();
        break;

        case "a":
            var tom1= new Audio("sounds/kick-bass.mp3");
            tom1.play();
        break;

        case "r":
            var tom1= new Audio("sounds/snare.mp3");
            tom1.play();
        break;
    
        default: console.log();
            
    }
}


//Animation to website means how much time it take on the button when we will clicked on the button while playing the guitar.
function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}








//key point during explanation
//(1) we can play the drum by clicking on screen on the button.
//(2)we can also play the drum by the help of keyboard of the letter.









