// var button = document.getElementsByTagName("Button")[0]
//
// button.addEventListener("click", function() {
//   console.log("CLICK!!!");
// })

var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');

//add event listener to the Button
button.addEventListener("click", function(){
  if (input.value.length > 0) {
    //create an element li since we want to add to the list
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(input.value));
      ul.appendChild(li);
      input.value = '';
  }
  //console.log(input.value);
})

input.addEventListener("keypress", function(event){
  if (input.value.length > 0 && event.keyCode === 13) {
    //create an element li since we want to add to the list
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(input.value));
      ul.appendChild(li);
      input.value = '';
  }
  //console.log(input.value);
})
