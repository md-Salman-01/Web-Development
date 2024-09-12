
// IF-STATEMENT.

let color= "green";

if(color == "red"){
    console.log("Stop..");
}
if(color == "yellow"){
    console.log("Slow down..")
}
if(color == "green"){
    console.log("U can GO...")
}

// ELSE-IF STATEMENT.

let age = 20;

if(age >=18){
    console.log("You can vote")
}
else if(age >18){
    console.log("You can vote too .")
}
else if(age < 18){
    console.log("You cant vote..")
}

let marks = 80;

if(marks > 90){
    console.log("A+");
}
else if(marks > 80){
    console.log("B+")
}
else if(marks > 70){
    console.log("C")
}
else if(marks > 60){
    console.log("D")
}
else if(marks < 40){
    console.log("Repeat this class..")
}

//  ELSE STATEMENT.

let age1 = 10;

if(age1 > 18){
    console.log("Adult")
}
else{
    console.log("Teenager")
}

// NESTED IF-ELSE

let marks1 = 55;

if(marks1>=40){
    console.log("Pass");
                if(marks1 >= 80){
                    console.log("GRADE : OUT STANDING");
                }
                else{
                    console.log("GRADE : EXCELLENT");
                }
}
else{
    console.log("Better luck next time !");
}

// SWITCH STATEMENT.

let color1 = "green";

switch(color1){
    case "red" :
        console.log("Stop..");
        break;
    case "yellow":
        console.log("Slow down");
        break;
    case "green":
        console.log("U can goo..");
        break;
    default:
        console.log("Traffic light is not working")
}