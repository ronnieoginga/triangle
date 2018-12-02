function result(){
var side one=parseInt(document.getElementById('side one').value);
var side two=parseInt(document.getElementById('side two').value);
var side three=parseInt(document.getElementById('side three').value);
var answer=document.getElementById('answer');
if(side1+side2>side3 && side2+side3>side1 && side1+side3>side2) {
  if (side1==side2&&side1==side3) {
    answer.textContent='Equilateral: All sides are equal!';
}
else if (side one===side two||side two===side three||side one===side three){
  answer.textContent='Isosceles: Two sides are equal!'
}

else{
   answer.textContent="Scalene: No sides are equal!";
 }
}
else{
  answer.textContent="Not a triangle";
}
}
function reset(){
  var side1=parseInt(document.getElementById('side one').value);
  
}
