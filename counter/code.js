//init
let count = 0 ;


const value =document.querySelector("#value") ; 
const btns = document.querySelectorAll(".btn") ;  //devuelve un nodelist(como una array pero de nodos) para iterar que no esta vivo(osea que no se edita)
btns.forEach(function(btn)  {
    btn.addEventListener("click", function(e)
    {   
        const styles  = e.currentTarget.classList ; 
        //contains devuelve false si no sae encuentra la cadena , true lo contrario
        if (styles.contains("decrease"))
        {   
            count -- ;
            if(count<0)
        {
            value.style.color = "red" ; 
        } 
        }
        else if (styles.contains("increase"))
        {   

            count ++ ; 
            if (count>0)
            {
                value.style.color = "green" ; 
            } 
            
        }
        else 
        {
            count  = 0 ; 
            
        }

        if(count ==0 )
        {
            value.style.color = "black" ; 
        }
        value.textContent=count ; 
       
    })
});


