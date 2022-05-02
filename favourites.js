// write js code here corresponding to favourites.html

var arr1=JSON.parse(localStorage.getItem("favourites"));


arr1.forEach(function(elm,index){
    var row=document.createElement("tr");
    document.querySelector("tbody").append(row);
    td1=document.createElement("td");
    td1.innerText=elm.matchNumber;
    
    td2=document.createElement("td");
    td2.innerText=elm.teamA;
    
    td3=document.createElement("td");
    td3.innerText=elm.teamB;
    
    td4=document.createElement("td");
    td4.innerText=elm.matchDate
    
    td5=document.createElement("td");
    td5.innerText=elm.matchVenue
    
    td6=document.createElement("td");
    td6.innerText="Delete";
    td6.style.color="red";
    td6.style.cursor="pointer";

    td6.addEventListener("click", function(){
        deleteFav(index);
     });
    
    row.append(td1,td2,td3,td4,td5,td6)
    
    });

    function deleteFav(line){
    event.target.parentNode.remove();
    arr1.splice(line,1)
    localStorage.setItem("favourites",JSON.stringify(arr1));
    };
    
