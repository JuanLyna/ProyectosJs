const hex= [0 , 1, 2 ,3, 4,5,6 ,7 ,8 ,9,"A" , "B" ,"C","D" , "F"];

const btn = document.getElementById("btn") ; 
const color = document.querySelector(".color") ;
const body = document.querySelector(".container") ; 

btn.addEventListener("click" , function () {
    
     let hexColor = "#" ; 
     for(let i = 0; i<6 ; i++)//es menor a 6 para que agregar los ceros necesarios al # ej #0000001   
       {
        hexColor += hex[getRandomNumber()];
   
     }
     body.style.backgroundColor =  hexColor ; 
     color.textContent= hexColor ;
     color.style.color=  hexColor ; 
});
function getRandomNumber()
{
    return Math.floor(Math.random()*hex.length);
}