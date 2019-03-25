console.log("project-1");

var noOfPairsOfImages = (document.querySelectorAll("td").length / 2);
var openedCards = [];
var matchedPairs = [];
var flip = function(event) {


        openedCards.push(this);
        var len = openedCards.length;

        console.log(openedCards[0].querySelector("img").src);
        console.log(this);


        this.querySelector("img").style.visibility = "visible";

        this.removeEventListener("click", flip);

    if(len === 2) {

        if(openedCards[0].querySelector("img").src === openedCards[1].querySelector("img").src) {
            matched();
        } else {
            unmatched();
        }
    }



}

var checkWinStatus = function() {

    if(matchedPairs.length == noOfPairsOfImages) {
        alert("You won!");
    }


}

var disable = function() {
    var allCells = document.getElementsByTagName("td")
    for(var i=0; i<allCells.length; i++) {
        allCells[i].removeEventListener("click", flip);
    }
}

var enable = function() {
    var allCells = document.getElementsByTagName("td")
    for(var i=0; i<allCells.length; i++) {
        allCells[i].addEventListener("click", flip);
    }
}

var matched = function() {
    openedCards[0].remove();
    openedCards[1].remove();

    matchedPairs.push("");
    openedCards = [];
    checkWinStatus();
}

var unmatched = function() {

     disable();
     setTimeout(function() {
        openedCards[0].querySelector("img").style.visibility = "hidden";
        openedCards[1].querySelector("img").style.visibility = "hidden";
        // console.log(openedCards)
        enable();
        openedCards = [];
     }, 1500);
}

var cell1 = document.getElementById("cell1");
var cell2 = document.getElementById("cell2");
var cell3 = document.getElementById("cell3");
var cell4 = document.getElementById("cell4");


cell1.firstElementChild.style.visibility = "hidden"
cell2.firstElementChild.style.visibility = "hidden"
cell3.firstElementChild.style.visibility = "hidden"
cell4.firstElementChild.style.visibility = "hidden"

cell1.addEventListener("click", flip);
cell2.addEventListener("click", flip);
cell3.addEventListener("click", flip);
cell4.addEventListener("click", flip);