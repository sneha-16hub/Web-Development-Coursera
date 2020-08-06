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
greeting("joe");
greeting("Sam");