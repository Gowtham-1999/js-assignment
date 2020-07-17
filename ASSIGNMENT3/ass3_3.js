// QUESTION 3:
let marks = +prompt("Enter the Marks ", "0");

switch (marks){
    case marks: if (marks>=70 && marks<=100){  
            console.log(`Marks is ${marks} and grade is ${'A'}`);
            break;
    }
    case marks: if (marks >=50 && marks <70) {
        console.log(`Marks is ${marks} and grade is ${'B'}`);
        break; 
    }  
    case marks : if (marks < 50) {
        console.log(`Marks is ${marks} and grade is ${'Fail'}`)
        break;
    }
    default : 
        console.log("Entered the correct marks");
        break;
}
