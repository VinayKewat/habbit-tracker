// this function totally depends on search habbit from which is user add ,
// type habbit then search ;

function search_habit() { 
let input = document.getElementById('searchbar').value 
input=input.toLowerCase(); 
let x = document.getElementsByClassName('habit'); 
  
// loop for search items which is added by user
for (i = 0; i < x.length; i++) {  
if (!x[i].innerHTML.toLowerCase().includes(input)) { 
    x[i].style.display="none"; 
} 

// display list item which is typed in search box
else { 
    x[i].style.display="list-item";                  
} 
} 
} 