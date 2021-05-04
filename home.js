var list;
var newItem;
var newItemTextNode;
var newListElement;
var deleteButtonElement;




// function filter() {
//    var waist = document.getElementById("waist-filter");
//    var type = document.getElementById("type-filter");
//    var size = document.getElementById("size-filter");

//    console.log(waist.value);
//    console.log(type.value);
//    console.log(size.value);
// }



function searchbar() {
   var search = document.getElementById("search-bar").value;
   var output = document.getElementById("ptag");
   console.log("asdfsdjkfgsj");
   output.innerHTML = search.value;
}



function enter() {
   console.log("New item will be added soon");

   //CREATING LIST ELEMENT and TEXTNODE for INPUT TEXT

   list = document.getElementById("unlist");
   newItem = document.getElementById("input-text").value;
   newItemTextNode = document.createTextNode(newItem);
   newListElement = document.createElement("LI");
   newListElement.appendChild(newItemTextNode);
   list.appendChild(newListElement);

   // var mainDiv = document.getElementById("main-content");
   // newItem.innerHTML = "";
   // mainDiv.appendChild(newItem);


   //CREATING DELETE ELEMENT FOR DELETE BUTTON

   deleteButtonElement = document.createElement("button");
   deleteButtonElement.type = "button";
   deleteButtonElement.innerHTML = "Delete";
   deleteButtonElement.className = "delete";

   //QUESTION? WHY EVENT OBJECT CANT BE PASSED AS AN ARGUMENT TO THIS FUNCTION ??

   // deleteButtonElement.onclick = deleteListItem(event);
   
   list.appendChild(deleteButtonElement);

   console.log("Task done");
}

function deleteListItem(e) {

   var deleteTag = e.target;
   var li = deleteTag.parentNode;
   li.parentNode.removeChild(li);

}

function abc() {
   document.getElementById("demo").innerHTML = "Paragraph changed!";
}

window.onload = function () {
   var btn = document.getElementById("search-button");
   btn.onclick = searchbar;
}

window.onload = function () {
   var EnterButton = document.getElementById("enter");
   EnterButton.onclick = enter;
}


console.log("done");

window.onload = function () {
   var btn = document.getElementById("demo");
   btn.onclick = abc;
}

// window.onload = function () {

//    var btn = document.getElementsByClassName("delete");
//    btn.onclick = deleteListItem(event);
// }



// USING JQUERY TO PERFORM ABOVE ACTIONS

