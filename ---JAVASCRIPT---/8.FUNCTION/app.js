// FUNCTION--

function hello(){
    console.log("hello");
}
hello();



function isAdult(){
    let age = 20;
    if(age >= 18){
        console.log("Adult");
  }
  else{
    console.log("Not adult");    
  }
}
isAdult();

function count(){
    for(let i =0; i<=5; i++){
        console.log(i);
    }
}
count();

//Print poem.

function poem(){
    console.log("Twinkle Twinkle little star");
}
poem();

// function argument.

function nameinfo(name,age){
     console.log(name,age);
}
nameinfo("salman",29);


//Airthematic operator in function.

function sum(a,b){
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);    
    
}
sum(10,20);
sum(20,30);
sum(14,20);

//Average in Function.

function average(a,b,c){
    average= (a+b+c)/3;
    console.log(`Average of a,b,c is :`,average);
}
average(10,20,30);


//Q2- Print the table using function.

function table(n){
    for(let i=2; i<=n*10; i+=n){
        console.log(i);
        
    }
}

table(2);

// Return Keyword.

function Adult(age){
    if(age>=18){
        return("Adult");
        }
        else{
            return("Not Adult");
        }
    }

//Q- function that return the sum of the number from 1 t n.

    function sum(n){

        let sum = 0;

        for(let i=0; i<=n; i++){
        sum = sum+i; 
           }
           return sum;
    }

    
//Q- Function that return the concatenation of all the string in array. 

    let str =["s","a","l","m","a","n"];
