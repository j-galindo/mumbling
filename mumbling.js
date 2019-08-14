function accum(s) {
  let array =[];
  let solutions = [];
	for(i=0; i<s.length; i++){
//    s[i].repeat(i+1);
   array.push(s[i].repeat(i+1));
   
//    console.log(array);
    
  } 
  for(i=0;i<array.length; i++){
    array[i][0].toUpperCase()
    solutions.push(array[i][0].toUpperCase())
    if (array[i].length >1){
    solutions.push(array[i].toLowerCase().substr(1,array[i].length))
    }
    solutions.push("-"); 
  }
  solutions.pop();
  return solutions.join("");
  
}