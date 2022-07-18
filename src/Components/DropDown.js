import React from 'react'

function DropDown() {
   const myFunction =() =>{
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }

   }

  return (
    <div>
     

<input type="text" id="myInput" onKeyUp={myFunction} placeholder="Search for names.." title="Type in a name"/>

<ul id="myUL">
 <li><a href="#">Red</a></li> 
 <li><a href="#">Yellow</a></li> 

  <li><a href="#">Green</a></li> 
  <li><a href="#">Blue</a></li> 

  <li><a href="#">White</a></li>
  <li><a href="#">Black</a></li>
  <li><a href="#">Orange</a></li>
</ul>



    </div>
  )
}

export default DropDown