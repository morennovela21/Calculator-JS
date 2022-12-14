// Question 1
const q1 = () => {
let i = 3;
while (i) {
    alert( i );
     i--;
 }
// last value alerted = 1
// adter 1 is printed i--, i=0; i will evaluate to false, o is falsy value
}
//q1 (1);

// Question 2
const q2 = () => {
//let i = 0;
//while (++i < 5) alert( i );
// answer = 4 

let i = 0; 
while (i++ < 5 ) alert (i);
// answer = 5
}
//q2 (1);

// Question 3
const q3 = () => {
// for (let i = 0; i < 5; i++) alert(i);
for (let i = 0; i < 5; ++i) alert(i);
}
//q3 (1);

// Question 4
const q4 = () => {
 
for (let i = 0; i < 3; i++) {
  alert (`number ${i}!` ); 
   }
 let i = 0;
  while(i < 3) {
  alert(`number ${i++}`);
   }
 }

//q4 (1);

// Question 5 
const q5 = () => {
/* 
   Input from user using prompt 
   if input < 100 then prompt again
   if user cancels / enter empty line, stop prompt

*/
let value;
 do {

    value = Number ( prompt ("Enter the number > 100"));
    
    } while(value <= 100 && value);
 }

q5 (1);

// Question 6
const q6 = () => {
// let numbers = "";
 // for(let i = 1; i <= 8; i++) {
  //  numbers += 1 + " " ;
   // console.log(numbers);
  // }
 
}
   
// Question 7
const q7 = () => {
// n = 5, 5 % 4 , 5 % 3, 5 % 2 === 0, not prime, !== 0 prime
// count from 2 to n
// i=5, i % 4 === 0?, i % 3 ===0 ?, i & 2 === 0?
// count from 2 to i - 1
/**
 * j = 2; j < 5; j++
 * 2, 3, 4
 */

   for(let i = 2; i < 10; i++) {
      let isPrime = true;
      for(let j = 2; j < i; j++) {
         // check if i is prime
         if (i & j === 0) {
            // npt prime, go to the next
            isPrime = false;
            break;
         }
         // if prime, print i
         if(isPrime)
         console.log(i);
         }
         // if prime, print i
         if(isPrime)

   //} 

//}

//q7 (21);

// Question 8
//const q8 = () => {
   // const reversearray = [ "a", "b", "c", "d" ];
   // reversearray.reverse();
   
   // console.log(reversearray);

//}
//q8 (1)

// Question 9

//const fizzBuzz = (n) => {
      // count from 1 to n, check each number if "FizzBuzz", "Buzz", "Fizz"
   const answer = [];
   for(let i = 1; i <= n; i++) {
    if(i % 3 === 0 && i % 5 === 0 ) {
      //"FizzBuzz"
      answer.push("FizzBuzz");
    }

   else if (i % 5 === 0) {
      // "Buzz"
      answer.push("Buzz");
   }
   else if (i % 3 === 0) {
      // "Fizz"
      answer.push("Fizz");
   }
   else {
      // i
      answer.push(`&{i}`);
   }
}
return answer;
}


