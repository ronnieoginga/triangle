function result(){
var sideone=parseInt(document.getElementById('sideone').value);
var sidetwo=parseInt(document.getElementById('sidetwo').value);
var sidethree=parseInt(document.getElementById('sidethree').value);
var answer=document.querySelector('#answer');

  if (sideone==sidetwo&&sideone==sidethree) {
    answer.innerHTML="Equilateral";
}
else if (sideone===sidetwo || sidetwo===sidethree || sideone===sidethree){
  answer.innerHTML="Isosceles";
}

else if(sideone+sidetwo>sidethree || sidetwo+sidethree>=sideone || sideone+sidethree<=sidetwo){
   answer.innerHTML="Scalene";
 }

else{
  answer.innerHTML="Not a triangle";
}

}
