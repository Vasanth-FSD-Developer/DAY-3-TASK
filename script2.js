//question 2
//1st
var request = new XMLHttpRequest();
//2nd
request.open("GET", "https://restcountries.com/v3.1/all");
//3rd
request.send();
//4th
request.onload = function () {
    var result = JSON.parse(request.response);
    //loop method to print flag
    for (var i=0;i<result.length;i++){
        //prints all flags only

        console.log(result[i].flags);
        
    }
}