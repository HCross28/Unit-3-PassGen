var length;
var option;
var input = true;


//Password Length
    length = prompt("Please enter desired password length.\n between 8 and 128");
    if(length !== null){
        
        while(Number.isNaN(Number(length)) === true || length < 8 || length > 128){
            length = prompt("Invalid response! Please enter a number between 8 and 128.");
            
            if(length===null){
                length = alert ("No Password For You!")
                break
            }
        }
    }
    else{  
        length = alert ("No Password For You!")
    }
//Password Options
    option = prompt("Choose the letter/s of each character type that you want to include.\n s : special characters \n n : numeric characters \n l : lowercase characters \n u : uppercase characters");
    if(option !== null){
        optionCheck();
        
        while(!input){
            option = prompt("Invalid input! Please enter either s, n, l, u. \n *example: sl \n s : special characters \n n : numeric characters \n l : lowercase characters \n u : uppercase characters");
            optionCheck();
        }
    }
    else{ 
        option = alert("No Password For You");
        
    }
    function optionCheck() {
        if(option === ""){ 
            input = false; 
        }
        else if(option === null){ 
            input = true;
            option = alert("No Password For You") 
        }
        else{
            var optionArr = option.split("");

            input = optionArr.every((el)=>{
                return el === 's' || el === 'n' || el === 'l' || el === 'u';
        })
    }
    }

//Password Choices 

var data = {
    s:['!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~' ],
    n:[0,1,2,3,4,5,6,7,8,9],
    l:['a','b','c','d','e','f','g','h','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    u:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
}

var optionArr = Array.from(option);

var pool = optionArr.reduce((acc,el) => { return acc.concat(data[el]) },[]);



//Password Generator

var passGen = () => {
    var pw = "";
    var fullPw = "";
    for(i=0; i < length; i++){
        pw = pool[ Math.floor( Math.random() * pool.length) ];
        fullPw += pw;
    }
    return fullPw;
}

//Event Listeners

document.getElementById('generate').addEventListener('click',()=>{
   var generatedPwd = passGen();
   document.getElementById('result').innerHTML = generatedPwd;
});
document.getElementById('copy').addEventListener('click',()=>{
    var copyPw = document.getElementById('result')
        copyPw.select();
        copyPw.setSelectionRange(0,128);
    document.execCommand('copy');
    alert("Copy Successful");
});
