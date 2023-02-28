const colors = ["green","red","rgba(133,122,200)","f15025","blue"];
const body = document.querySelector(".container") ; 
const btn = document.getElementById("btn"); 
const color= document.querySelector(".color");
btn.addEventListener("click",function()
{   //get random number between 0-3
    const randomNumber = getRandomNumber() ;
    console.log(randomNumber); 
   body.style.backgroundColor = colors[randomNumber] ; 
    color.textContent=colors[randomNumber ] ;
    color.style.color= colors[randomNumber ] ; 

});
function getRandomNumber() 
{
 return Math.floor(Math.random()*colors.length)       ;  //multiplicamos el número porqueel math random da entre 0-1
  //mathFloor redondea para abajo ej 0.9=0,1-9=1 ; 
}