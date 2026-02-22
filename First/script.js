var h1 = document.querySelector("h1");


var flag =0 ;

h1.addEventListener("click", function(){
    if(flag == 0){
        h1.innerHTML = "Welcome to Sandeep Patel"
        flag = 1 ;
    } else {
        h1.innerHTML = "Hello World"
        flag = 0 ;
    }
  
});