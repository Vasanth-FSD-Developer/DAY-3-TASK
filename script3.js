//question 3
//1st
var request = new XMLHttpRequest();
//2nd
request.open("GET", "https://restcountries.com/v3.1/all");
//3rd
request.send();
//4th
request.onload = function () {
    var result = JSON.parse(request.response);
    //loop method 
    for (var i=0;i<result.length;i++){
        //prints value
        console.log(result[i].name.common);
        console.log(result[i].region);
        console.log(result[i].subregion);
        console.log(result[i].population);
    }
}