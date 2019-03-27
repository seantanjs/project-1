// console.log("project-1");

// ///////////////////////// Everything below here is MVP /////////////////////////////

// //initialize no of images pairs which determines the win condition
// var noOfPairsOfImages = (document.querySelectorAll("td").length / 2);

// //initialize an array which is used as a condition to check if the user has selected a pair of cells for comparison
// var openedCards = [];

// //initialize an array which tracks the number of matched pairs which will be compared against the no of images pairs in the above line to determine win condition
// var matchedPairs = [];

// //flip function triggered upon clicking on a cell element
// var flip = function(event) {

//         //each time a cell element was clicked, push that cell element into the openCards array
//         openedCards.push(this);

//         //declare a length variable which will be used as a condition to check if a pair of cells was selected
//         var len = openedCards.length;

//         //some console.logs for testing
//         console.log(openedCards[0].querySelector("img").src);
//         console.log(this);


//         //when the cell is clicked, the image within the cell is set to visible to reveal the image
//         this.querySelector("img").style.visibility = "visible";

//         var foo = this.querySelector("flip-card-inner");

//         //after clicking on the cell, we "disable" the cell to prevent the user from clicking on it again
//         this.removeEventListener("click", flip);

//     //if the length of the openedCards array is 2 i.e 2 cards have been selected
//     if(len === 2) {

//         //if the 1st opened card and the 2nd opened card has the same image, then we call the matched function
//         if(openedCards[0].querySelector("img").src === openedCards[1].querySelector("img").src) {
//             matched();
//         } //else if there is no match, we call the unmatched function
//         else {
//             unmatched();
//         }
//     }

// }

// //check win status to determine if the player has won or not
// var checkWinStatus = function() {
// //initialize no of images pairs which determines the win condition
//     var noOfPairsOfImages = (document.querySelectorAll("td").length / 2);
//     if(matchedPairs.length == noOfPairsOfImages) {
//         alert("You won!");
//     }


// }

// //disable function disables all cells
// var disable = function() {
//     var allCells = document.getElementsByTagName("td")
//     for(var i=0; i<allCells.length; i++) {
//         allCells[i].removeEventListener("click", flip);
//     }
// }
// //enable function enables all cells
// var enable = function() {
//     var allCells = document.getElementsByTagName("td")
//     for(var i=0; i<allCells.length; i++) {
//         allCells[i].addEventListener("click", flip);
//     }
// }

// //matched function
// var matched = function() {
//     //removes the matching pairs from the table if there is a match
//     // openedCards[0].remove();
//     // openedCards[1].remove();

//     //makes the matched cell pair hidden in visibility to reveal a part of the background
//     openedCards[0].style.visibility = "hidden";
//     openedCards[1].style.visibility = "hidden";
//     openedCards[0].querySelector("img").style.visibility = "hidden";
//     openedCards[1].querySelector("img").style.visibility = "hidden";


//     //push a counter to the matched pairs array for use in determining win state
//     matchedPairs.push("");

//     //reset the openedCards array so that the user is able to again select at most 2 more cards to compare
//     openedCards = [];

//     //call the check win status each time the matched function is called
//     checkWinStatus();
// }

// //unmatched function
// var unmatched = function() {

//     //call the disable function to disable all cells when 2 cells are selected for comparison
//      disable();

//      //set a timeout function to enable the images to be revealed for a short while before hiding them again. The enable function is also called to enable all cells to be clickable again for the next set of comparison. openedCards array is reset for next set of selection
//      setTimeout(function() {
//         openedCards[0].querySelector("img").style.visibility = "hidden";
//         openedCards[1].querySelector("img").style.visibility = "hidden";
//         enable();
//         openedCards = [];
//      }, 1000);
// }

// //get all cell elements on the DOM
// // var cell1 = document.getElementById("cell1");
// // var cell2 = document.getElementById("cell2");
// // var cell3 = document.getElementById("cell3");
// // var cell4 = document.getElementById("cell4");

// //initialize all images within each cell to be hidden by default
// // cell1.firstElementChild.style.visibility = "hidden"
// // cell2.firstElementChild.style.visibility = "hidden"
// // cell3.firstElementChild.style.visibility = "hidden"
// // cell4.firstElementChild.style.visibility = "hidden"

// //add click event listener to each cell element, with each click triggering the flip function
// // cell1.addEventListener("click", flip);
// // cell2.addEventListener("click", flip);
// // cell3.addEventListener("click", flip);
// // cell4.addEventListener("click", flip);

// var flipcard = document.querySelector("flip-card-inner");
// flipCard



///////////////////////// Everything below here is non-MVP //////////////////////////

console.log("project-1");

//prompt the user for no. of images he wants to play with
var noOfImagesInput = prompt("How many images do you want to play the game with? Please select a number between 5 to 10");

//conditional checks for invalid range of values
if(parseInt(noOfImagesInput) < 5 || parseInt(noOfImagesInput) > 10 || isNaN(parseInt(noOfImagesInput))) {

//while loop to keep asking player for valid number of images if he keep inputting invalid values
    var flag = false;
    while(!flag) {
        var noOfImagesInput = prompt("How many images do you want to play the game with? Please select a number between 5 to 10");

        if(parseInt(noOfImagesInput) < 5 || parseInt(noOfImagesInput) > 10 || isNaN(parseInt(noOfImagesInput))) {
            flag = false;
        } else {
            flag = true;
        }

    }
 }

//function to create the dimension of the board
 var tableDimensions = function(noOfImagesInput) {

    var noOfImages = parseInt(noOfImagesInput);

//initialize arrays for the game board dimensions for later creation
    var gameBoardDimensions = [];
    var rowArray = [];
    var columnArray = [];

//list of conditionals to create the the rows and columns dimensions depending on user's input
    if(noOfImages == 2) {

        for(var i=0; i<2; i++) {
            rowArray.push("");
            // console.log(rowArray);
        }

        gameBoardDimensions.push(rowArray);

        for(var j=0; j<2; j++) {
            columnArray.push("");
                // console.log(columnArray);
        }

        gameBoardDimensions.push(columnArray);

        } else if(noOfImages == 5) {

        for(var i=0; i<2; i++) {
            rowArray.push("");
            // console.log(rowArray);
        }

        gameBoardDimensions.push(rowArray);

        for(var j=0; j<5; j++) {
            columnArray.push("");
                // console.log(columnArray);
        }

        gameBoardDimensions.push(columnArray);

        } else if(noOfImages == 6) {

            for(var i=0; i<3; i++) {
                rowArray.push("");
            }

            gameBoardDimensions.push(rowArray);

            for(var j=0; j<4; j++) {
                columnArray.push("");
            }

            gameBoardDimensions.push(columnArray);

        } else if(noOfImages == 7) {

            for(var i=0; i<2; i++) {
                rowArray.push("");
            }

            gameBoardDimensions.push(rowArray);

            for(var j=0; j<7; j++) {
                columnArray.push("");
            }

            gameBoardDimensions.push(columnArray);

        } else if(noOfImages == 8) {

            for(var i=0; i<4; i++) {
                rowArray.push("");
            }

            gameBoardDimensions.push(rowArray);

            for(var j=0; j<4; j++) {
                columnArray.push("");
            }

            gameBoardDimensions.push(columnArray);

        } else if(noOfImages == 9) {

            for(var i=0; i<3; i++) {
                rowArray.push("");
            }

            gameBoardDimensions.push(rowArray);

            for(var j=0; j<6; j++) {
                columnArray.push("");
            }

            gameBoardDimensions.push(columnArray);

        } else if(noOfImages == 10) {

            for(var i=0; i<4; i++) {
                rowArray.push("");
            }

            gameBoardDimensions.push(rowArray);

            for(var j=0; j<5; j++) {
                columnArray.push("");
            }

            gameBoardDimensions.push(columnArray);
        }

        console.log(gameBoardDimensions);

        return gameBoardDimensions;

}

// function which takes the game board dimensions as argument (from above) and creates the board
var createGameBoard = function (gameBoardDimensions) {

//create a table element which will be the parent node
    var table = document.createElement("table");
    table.id = '';


    console.log(gameBoardDimensions[0]);
    console.log(gameBoardDimensions[1]);

    console.log(gameBoardDimensions[0].length);
    console.log(gameBoardDimensions[1].length);

//loop through each row of the table's dimension, create a tr element for each row
    for(var i=0; i< gameBoardDimensions[0].length; i++) {
        var row = document.createElement("tr");
        //for each row, loop through each cell of the table's dimension, create a td element for each cell
        for(var j=0; j<gameBoardDimensions[1].length; j++) {
            var cell = document.createElement("td");
            console.log(cell);

            //initialize by setting various attributes for each td cell element
            cell.setAttribute("id", i + "-" + j);
            cell.addEventListener("click", flip);
            cell.textContent = "";

            //create  an img tag for each td cell element to attach to
            var img = document.createElement("img");
            img.setAttribute("id", "img-" + i + "-" + j);
            img.setAttribute("src", " ");

            //append each img tag to each cell tag
            cell.appendChild(img);

            //force the img to be hidden from view
            cell.firstElementChild.style.visibility = "hidden"

            //append each cell to each row, increasing the number of children cells with each iteration
            row.appendChild(cell);
        }
        console.log(row)

        //finally append the row (which contains all the children cells with img) to the parent node table
        table.appendChild(row)
    }

    //append the completed table to the gameBoard div
    document.querySelector(".gameBoard").appendChild(table);
    // console.log(table);
    return table;
}


//function to fill up each cell with images
var fillUpCellWithImages = function(table) {

//initialize an array of images for selection
    var imagesArr = [
    "images/icon1.png",
    "images/icon2.png",
    "images/icon3.png",
    "images/icon4.png",
    "images/icon5.png",
    "images/icon6.png",
    "images/icon7.png",
    "images/icon8.png",
    "images/icon9.png",
    "images/icon10.png",
    "images/icon11.png",
    "images/icon12.png",
    "images/icon13.png",
    "images/icon14.png",
    "images/icon15.png",
    ];

//initialize an empty array which will hold a random set of images to fill up the cell
    var selectedImg = [];

// console.log(table);


var noOfImages = parseInt(noOfImagesInput)

//assign a noOfCells variable with the total number of cells within the table
var noOfCells = (table.rows.length) * (table.rows[0].cells.length);

//initialize an array to hold a list of previously randomly generated index, this will be use for checking of duplicated index
var prevRandomIndex = [];

//initialize a current index variable to hold the current randomly generated index
var currentRandomIndex;

//loop through the images array to randomly select n images, where n refers to the no. of images which user input
for(var i=0; i<noOfImages; i++) {

    var flag = false;

    while(!flag) {

        currentRandomIndex = Math.floor(Math.random() * 15);

        //if the current index is found in the list of previously random generated indexes, re run the random generator until a unique current index is obtained
        if(prevRandomIndex.includes(currentRandomIndex)) {
            flag = false;
        } //if the current index is not found in the list of previously random generated indexes, add that current index value into the previously random generated indexes array. Break out of the while loop as well
        else if((prevRandomIndex.includes(currentRandomIndex)) == false) {
            prevRandomIndex.push(currentRandomIndex);
            flag = true;
        }

    }

    //add each of the selected image to the selectedImg array which will be used to fill up each of the table's cell
    selectedImg.push(imagesArr[currentRandomIndex]);
    selectedImg.push(imagesArr[currentRandomIndex]);

}

console.log(selectedImg);
// debugger;

//call the shuffle function to randomize the selectedImg array so that each cell will be filled up with the images in a random fashion
var selectedImgShuffled = shuffle(selectedImg);
console.log(selectedImgShuffled);


//loop through the randomly arranged selectedImg array to fill up each cell with an image, the cells will look  as though it have been randomly filled with images
    var imgIndex = 0;

    for (var i = 0; i < table.rows.length; i++) {
        for(var j=0; j < table.rows[i].cells.length; j++) {
            var eachCell = document.getElementById("img-" + i + "-" + j);
                // eachCell.src = selectedImg[imgIndex];
                eachCell.setAttribute("src", selectedImgShuffled[imgIndex]);
                // console.log(selectedImgShuffled[imgIndex]);
                imgIndex++;
        }
    }


}

//initialize an array which tracks the number of matched pairs which will be compared against the no of images pairs in the above line to determine win condition
var matchedPairs = [];

// initialize moves count variable to store the no. of clicks user take
var moves = 0;

//restart function which scrambles the images on the board and make the hidden matched cells visible again, moves counter restarted. User able to restart his game
var restart = function() {

    //reset the moves counter to zero
    moves = 0;
    //reset the no. of matched pairs counter, otherwise checkWinStatus() function will not behave as expected
    matchedPairs = [];

    //update the moves counter content to "0 MOVES"
    var movesCounterContent = document.querySelector("#moves-counter .modal-content p");

    movesCounterContent.textContent = "0 MOVES";

    //upon restart, retrieve all cells and make them visible so that those pairs hidden due to being matched, will be visible again
    var allCells = document.querySelectorAll("td");

    for(var i=0; i<allCells.length; i++) {
        allCells[i].style.visibility = "visible";
        allCells[i].addEventListener("click", flip);
    }

//upon restart, reshuffle the images on the whole board
    var boardImagesArr = [];
    var allImages = document.querySelectorAll("img");
    console.log(allImages);

//loop through each of the images and push each of them into the image array which will be shuffled
    for(var j=0; j<allImages.length; j++) {
        var imageSrc = allImages[j].src
        boardImagesArr.push(imageSrc);
    }

//call the shuffle function to randomize the images in the array
    var selectedImgShuffled = shuffle(boardImagesArr);

    //use the newly shuffled images array to fill up the table cells again

    var imgIndex = 0;

    //for loop to sequentially fill up every cell of the table again with the newly randomized images in the array
    for (var i = 0; i < table.rows.length; i++) {
        for(var j=0; j < table.rows[i].cells.length; j++) {
            var eachCell = document.getElementById("img-" + i + "-" + j);
                // eachCell.src = selectedImg[imgIndex];
                eachCell.setAttribute("src", selectedImgShuffled[imgIndex]);
                // console.log(selectedImgShuffled[imgIndex]);
                imgIndex++;
        }
    }

}
//shuffle function to shuffle the images position within the selectedImg array
var shuffle = function(selectedImg) {

    for (var i = selectedImg.length-1; i >=0; i--) {

        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = selectedImg[randomIndex];

        selectedImg[randomIndex] = selectedImg[i];
        selectedImg[i] = itemAtIndex;
    }

    return selectedImg;
}

//function to record the current moves/clicks counter and display it on the page
var moveCounter = function() {
   var movesCounter = document.querySelector("#moves-counter .modal-content p");
   movesCounter.textContent = moves + " MOVES"
}

//initialize an array which is used as a condition to check if the user has selected a pair of cells for comparison
var openedCards = [];


//flip function triggered upon clicking on a cell element
var flip = function(event) {

        //increment moves counter each time a cell is clicked
        moves++;

        //each time a click is registered, call the moveCounter() function to register the no. of clicks by user
        moveCounter();


        //each time a cell element was clicked, push that cell element into the openCards array
        openedCards.push(this);

        //declare a length variable which will be used as a condition to check if a pair of cells was selected
        var len = openedCards.length;

        //some console.logs for testing
        console.log(openedCards[0].querySelector("img").src);
        console.log(this);


        //when the cell is clicked, the image within the cell is set to visible to reveal the image
        this.querySelector("img").style.visibility = "visible";

        //after clicking on the cell, we "disable" the cell to prevent the user from clicking on it again
        this.removeEventListener("click", flip);

    //if the length of the openedCards array is 2 i.e 2 cards have been selected
    if(len === 2) {

        //if the 1st opened card and the 2nd opened card has the same image, then we call the matched function
        if(openedCards[0].querySelector("img").src === openedCards[1].querySelector("img").src) {
            matched();
        } //else if there is no match, we call the unmatched function
        else {
            unmatched();
        }
    }

}

//check win status to determine if the player has won or not
var checkWinStatus = function() {
//initialize no of images pairs which determines the win condition
    var noOfPairsOfImages = (document.querySelectorAll("td").length / 2);
    if(matchedPairs.length == noOfPairsOfImages) {
        alert("You won!");
    }


}

//disable function disables all cells
var disable = function() {
    var allCells = document.getElementsByTagName("td")
    for(var i=0; i<allCells.length; i++) {
        allCells[i].removeEventListener("click", flip);
    }
}
//enable function enables all cells
var enable = function() {
    var allCells = document.getElementsByTagName("td")
    for(var i=0; i<allCells.length; i++) {
        allCells[i].addEventListener("click", flip);
    }
}

//matched function
var matched = function() {
    //removes the matching pairs from the table if there is a match
    // openedCards[0].remove();
    // openedCards[1].remove();

    //makes the matched cell pair hidden in visibility to reveal a part of the background
    openedCards[0].style.visibility = "hidden";
    openedCards[1].style.visibility = "hidden";
    openedCards[0].querySelector("img").style.visibility = "hidden";
    openedCards[1].querySelector("img").style.visibility = "hidden";


    //push a counter to the matched pairs array for use in determining win state
    matchedPairs.push("");

    //reset the openedCards array so that the user is able to again select at most 2 more cards to compare
    openedCards = [];

    //call the check win status each time the matched function is called
    checkWinStatus();
}

//unmatched function
var unmatched = function() {

    //call the disable function to disable all cells when 2 cells are selected for comparison
     disable();

     //set a timeout function to enable the images to be revealed for a short while before hiding them again. The enable function is also called to enable all cells to be clickable again for the next set of comparison. openedCards array is reset for next set of selection
     setTimeout(function() {
        openedCards[0].querySelector("img").style.visibility = "hidden";
        openedCards[1].querySelector("img").style.visibility = "hidden";
        enable();
        openedCards = [];
     }, 1000);
}


//main function
var gameBoardDimensions = tableDimensions(noOfImagesInput);
var table = createGameBoard(gameBoardDimensions);

fillUpCellWithImages(table);