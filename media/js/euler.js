function count(){
    var sum = 0;
    for (var i=3; i < document.getElementById('num').value; i++){
        if (i%3===0){
         sum = sum + i;
        }
        else if(i%5===0){
         sum = sum + i;
        }
        else{
         continue;
        }
    }
	 document.getElementById('result').innerHTML = sum;
 }