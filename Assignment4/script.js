function greeting(str)
{
  var arr= str.split(' ');
  for(var x = 0; x < arr.length; x++){
  
  var a=arr[x].charAt(0).toUpperCase(); 
  
  if(a=='J')
  	console.log("Goodbye "+arr);
  else
  	console.log("Hello "+arr);
}
}

greeting("Yaakov");
greeting("John");
greeting("Jen");
greeting("Jason");
greeting("Paul");
greeting("Frank");
greeting("Larry");
greeting("Paula");
greeting("Laura");
greeting("Jim");