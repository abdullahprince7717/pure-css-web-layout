
function filter(){

    var waist = document.getElementById("waist-filter");
    var type = document.getElementById("type-filter");
    var size = document.getElementById("size-filter");
 
    console.log(waist.value);
    console.log(type.value);
    console.log(size.value);
    }
 
 window.onload = function(){
    var btn = document.getElementById("search-button");
    btn.onclick = searchbar; 
 
 }  
 
 function searchbar(){
 
    var search = document.getElementById("search-bar").value;
    var output = document.getElementById("ptag");
    console.log("asdfsdjkfgsj");
    output.innerHTML = search.value;
    }
    
    window.onload = function(){
 
       var EnterButton = document.getElementById("Enter");
       EnterButton.onclick = Enter;
    }
    
    var list;
    var newItem;
    var newItemTextNode;
    var newListElement;
    var deleteButtonElement;
 
    function Enter(){
 
       console.log("New item will be added soon");
       
       //CREATING LIST ELEMENT and TEXTNODE for INPUT TEXT
 
       list = document.getElementById("unlist");
       newItem = document.getElementById("inputListItem").value;
       newItemTextNode = document.createTextNode(newItem);
       newListElement = document.createElement("LI");
       newListElement.appendChild(newItemTextNode);
       list.appendChild(newListElement);
       
       //CREATING DELETE ELEMENT FOR DELETE BUTTON
 
       deleteButtonElement = document.createElement("button");
       deleteButtonElement.type = 'button';
       deleteButtonElement.innerHTML = 'Press me';
       deleteButtonElement.className = 'delete-button';
       list.appendChild(deleteButtonElement);
 
       console.log("Task done");
 
 }
 
 
 
 
 
 
 
 
 