// var button = document.getElementsByTagName("Button")[0]
//
// button.addEventListener("click", function() {
//   console.log("CLICK!!!");
// })

var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');

function inputLength(){
  return input.value.length;
}

function createListElement(){
  //create an element li since we want to add to the list
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = '';
    //console.log(input.value);
}

//add event listener to the Button
button.addEventListener("click", function(){
    if (inputLength() > 0) {
      createListElement();
  }
})

input.addEventListener("keypress", function(event){
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
})
