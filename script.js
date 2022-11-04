let myGrade =(40);
console.log(myGrade);
if (myGrade >= 90) {
    console.log("I got an A!!! I'm the best!!!");
}
else if(myGrade < 90 && myGrade > 70) {
    console.log("A B is fine as well i suppose.");
}
else if(myGrade < 80 && myGrade > 60) {
    console.log("Really, a C?");
} 
else if(myGrade < 70 && myGrade > 50) {
    console.log("D. just go home.");
}
else if(myGrade < 60 && myGrade > 40) {
    console.log("FAILURE!")
}
else {
    console.log("Oops. Better study more.");
}