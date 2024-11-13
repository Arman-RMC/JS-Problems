// // Qs-1


// Conditional Discounts with if-else
// Write a function, calculateDiscount(price, customerType), that calculates discounts based on customer type:

// "premium" customers get a 20% discount,
// "regular" customers get a 10% discount,
// others get a 5% discount. Return the final price after discount. Include an error check for negative prices or invalid customer types.

//  const calculateDiscount = function(price,customerType){
//     if(price>0){
//         if(customerType=="Premium")
//         {
//             let FinalDiscounts = price-(price*20)/100;
//             return FinalDiscounts;
//         }
//         else if(customerType=="Regular"){
//             let FinalDiscounts = price-(price*10)/100;
//             return FinalDiscounts;
//         }
//         else{
//             let FinalDiscounts = price-(price*5)/100;
//             return FinalDiscounts;
//         }
//     }
//  }
//  let amount =10,customerType="Regular";
//  let FinalAmount = calculateDiscount(amount,customerType);
//  console.log("customer type = ", customerType);
//  console.log("total purchage amount = ",amount);
//  console.log("Final amount = ",FinalAmount);




// // Qs-2


// // Prime Number Finder with for loop
// // Create a function, findPrimes(limit), that returns an array of all prime numbers up to a given limit. Use a for loop to check each number and only add it to the array if it's prime.


// var arr=[];

// const checkprime=function(num){
//     let flag=0
//     for(let i=2;i<num;i++){
//         if(num%i==0){
//             flag=1;
//         }
//     }
//     if(flag==0)
//         arr.push(num)

// }
// let limit =40;
// for(let j=2;j<=limit;j++)
//     checkprime(j);



// // Qs-3


// // Grading System with switch case
// // Write a function, getGrade(score), that assigns grades based on a score using switch case:
// // 90-100: "A"
// // 80-89: "B"
// // 70-79: "C"
// // 60-69: "D"
// // Below 60: "F" Use Math.floor(score / 10) in your switch statement.



// function getGrade(score) {
//     switch (Math.floor(score / 10)) {
//       case 10:
//       case 9:
//         return "A";
//       case 8:
//         return "B";
//       case 7:
//         return "C";
//       case 6:
//         return "D";
//       default:
//         return "F";
//     }
//   }
  
  
//   console.log(getGrade(95)); // Output: "A"
//   console.log(getGrade(85)); // Output: "B"
//   console.log(getGrade(75)); // Output: "C"
//   console.log(getGrade(65)); // Output: "D"
//   console.log(getGrade(55)); // Output: "F"
  



//  // Qs-4



// //  Nested Object Traversal
// // Define an object, company, with nested structures to represent departments and employees. Write a function, getEmployeeNames(departmentName), that returns an array of all employee names in the specified department. Assume the company object has the following structure:
// // const company = {
// //     HR: { employees: [{ name: "Alice" }, { name: "Bob" }] },
// //     IT: { employees: [{ name: "Charlie" }, { name: "David" }] },
// //     Finance: { employees: [{ name: "Eve" }, { name: "Frank" }] }
// // };


// const company ={};
// company.hr={};
// company.hr.emp=[];

// const hremp1={},hremp2={};
// hremp1.name="Raman"
// hremp2.name="Shivmani"
// company.hr.emp.push(hremp1,hremp2);

// company.IT={};
// company.IT.emp=[];

// const ITemp1={},ITemp2={};
// hremp1.name="vicki"
// hremp2.name="sakshi"
// company.IT.emp.push(ITemp1,ITemp2);


// company.Finance={};
// company.Finance.emp=[];

// const Financeemp1={},Financeemp2={};
// hremp1.name="Amit"
// hremp2.name="Tanvi"
// company.Finance.emp.push(Financeemp1,Financeemp2);

// console.log(company);

// function getemplist(depname){
//     if(depname=="hr")
//         return company.hr.emp;
//     else if(depname=="IT")
//         return company.IT.emp;
//     else
//     return company.Finance.emp;
// }
// let dep="Finance"
// let emplist=getemplist(dep);
// console.log(dep,"Dep emp list :-");

// for(let i=0;i<emplist.length;i++)
//     console.log(emplist[i]);


// // Qs-5

// // Create an object, bankAccount, with properties balance and accountType (savings, current). Write a method withdraw(amount) that:
// // Deducts the amount from the balance if it's less than or equal to the balance.
// // Adds a 10% penalty if the account type is "current" and the balance becomes negative. Return the updated balance after the operation.

// const BankAccount1 = {
//   Balance : 500,
//   AccountType:"Saving",
//  Withdraw:function(Amount){

//   if(this.Balance>=Amount && this.Balance>0)
//    this.Balance = this.Balance-Amount;

//   else
//   console.log("Invalid Amount");
  
//  }
// }

// const BankAccount2 = {
//   Balance:1000,
//   AccountType : "current",
//   Withdraw :function(Amount){
//       if(this.Balance>Amount)
//       this.Balance= this.Balance-Amount;
//       else{
//           console.log(" Your Balance is less than 0 so 10% penalty got applayed ");
          
//           this.Balance = this.Balance - (this.Balance*10)/100;
//       }
//   }
// }


// BankAccount1.Withdraw(200);
// console.log(BankAccount1);

// BankAccount2.Withdraw(900);
// BankAccount2.Withdraw(500);
// BankAccount1.Withdraw(200);
// console.log(BankAccount2);





// // Qs - 6


// // Student Grades with for loop and switch case
// // Define an array of objects, students, where each student has properties name and score. Write a function assignGrades(students) that assigns each student a grade (A-F) based on their score using a for loop and switch case. Update each student object with a new grade property.


// function CalculateGrade(marks){
//   let Total =0 , Inpercnt = 0;

//   for(let i = 0;i<marks.length;i++)
//     Total = Total + marks[i];

//   Inpercnt = Total/marks.length;

  
//   switch(true){
//     case (Inpercnt>90) :return "A Grade"
//     case (Inpercnt>80) :return "B Grade"
//     case (Inpercnt>70) :return "C Grade"
//   }

// }
// const Student1 = {};
// Student1.Name = "Ram Kumar";
// Student1.Mark = [96,57,79,68,79];
// Student1.Grade = CalculateGrade(Student1.Mark)

// console.log(Student1);

// const Student2 = {};
// Student2.Name = "Pramod kumar";
// Student2.Mark = [96,85,95,98,99];
// Student2.Grade = CalculateGrade(Student2.Mark)

// console.log(Student2);

// const Student3 = {};
// Student3.Name = "Raman Singh";
// Student3.Mark = [50,85,75,88,69];
// Student3.Grade = CalculateGrade(Student3.Mark)

// console.log(Student3);


// Qs-8

// Function to Group People by Age
// Given an array of objects, people, where each object contains name and age, write a function groupByAge(people) that groups people into age categories:
// "child" (0-12)
// "teen" (13-19)
// "adult" (20-64)
// "senior" (65+) Return an object with categories as keys and arrays of names as values.

const people = [
  { name: "Raman", age: 10 },
  { name: "Sakshi", age: 15 },
  { name: "Vicki", age: 35 },
  { name: "Pramod", age: 70 }
];

console.log(groupByAge(people));

function groupByAge(people) {
  const ageGroups = {
      child: [],
      teen: [],
      adult: [],
      senior: []
  };

  people.forEach(person => {
      const { name, age } = person;

      if (age >= 0 && age <= 12) {
          ageGroups.child.push(name);
      } else if (age >= 13 && age <= 19) {
          ageGroups.teen.push(name);
      } else if (age >= 20 && age <= 64) {
          ageGroups.adult.push(name);
      } else if (age >= 65) {
          ageGroups.senior.push(name);
      }
  });

  return ageGroups;
}




