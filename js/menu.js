count = 0;
 function apresentar(){
    const a = document.getElementsByClassName("nav-list")[0];
    count = count + 1;
  
    if(count%2 != 0){
        a.style.display = "block";
    }

    else{
        a.style.display = "none";
    }

}