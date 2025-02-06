let display = document.getElementById('display');
let input=' ';

let key = document.getElementById('keyboard').addEventListener("click",(ele)=>{

    let target= ele.target.innerText;

    if(target =="C"){
    
        input=' ';
    
        display.innerText='';
    }

    else if(target =="="){
        // input =eval(input);
        // display.innerText=input;
    }
    else{

        input +=target;
        display.innerText=input;
    }

})

