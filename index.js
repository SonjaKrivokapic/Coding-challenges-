


// function getCount(str) {
//     var vowelsCount = 0;
//     var vowels = ["a","e","i","o","u"];
//     for(var i = 0;i < str.length;i++){
//       for(var j=0;j < vowels.length;j++){
//         if(str[i] === vowels[j]){
        
//             vowelsCount++
//         }
//       }
//     }
//     return vowelsCount;
// };


//   function getCount(str) {
//     let vowelsCount = 0;
//     let arr = str.split("")
    
//     for(let i = 0; i < arr.length; i++){
//       switch (arr[i]){
//           case 'a':
//             vowelsCount++
//             break
//           case 'e':
//             vowelsCount++
//             break
//           case 'i':
//             vowelsCount++
//             break
//           case 'o':
//             vowelsCount++
//             break
//           case 'u':
//             vowelsCount++
          
//       }
//     }
//     return vowelsCount;
//   }

// function greet(name){
//     if(name === "Johnny")
//       return "Hello, my love!";
//     else
//       return "Hello, " + name + "!";
//   }

// function greet(name){
//   return "Hello, " + (name == "Johnny" ? "my love" : name) + "!"
// }

// console.log(greet("Sonja"));

// function getAverage(marks){

//   let count = 0;

//   for(i = 0; i < marks.length; i++){
//      count += marks[i]
//   }
//   return count;
// }

// console.log(getAverage([1,2,3,4,5]));

//da li je n deljivo sa x i sa y

// function isDivisible(n, x, y) {
//     let result1 = n/x
//     let result2 = n/y
    
//     if(result1 % 1 === 0 && result2 % 1 === 0 ){
//       return true
//     } else {
//       return false
//     }
//   }


// function isDivisible(n, x, y){
//     return !(n % x || n % y )
// }

// console.log(isDivisible(2,10,20))

// function isDivisible(n, x, y) {
//   return n % x === 0 && n % y === 0
// }

// function isDivisible(n, x, y) {
//   return !(n%x||n%y)
// }

// function isDivisible(n, x, y) {
//   return (n % x === 0 && n % y === 0) ? true : false;
// }

// function makeNegative(num) {
//     if(num < 0){
//       return num
//     }else{
//       return num * -1
//     }
//   }
  
  // function makeNegative(num){
  //   return num < 0 ? num : -num;
  // }
  
  // function makeNegative(num){
  //   return -Math.abs(num);
  // }

//   class SmallestIntegerFinder {
//       findSmallestInt(arrayOfNumbers){

//         let smallestNumber = 0;
        
//         for(let i = 0;i < arrayOfNumbers.length; i++){
//            const arrNumber = arrayOfNumbers[i]

//            if(arrNumber < smallestNumber){
//                smallestNumber = arrNumber;
//            }
//         }
//             return smallestNumber;
//       }
//   }

//   newFunction = SmallestIntegerFinder;

//   console.log(newFunction([77,47,365]))





  // ovo bi mogla vise puta da uradis
//   function findSmallestInt(arrayOfNumbers){
    
//     let smallestNumber = arrayOfNumbers[0] ;
    
//     for(i = 0; i < arrayOfNumbers.length; i++){
//           const arrNumber = arrayOfNumbers[i];
          
//           if(arrNumber < smallestNumber){
//               smallestNumber = arrNumber;
//             }
          
          
//       }
//       return smallestNumber
      
// }

//   console.log(findSmallestInt([98,2,1,109]))

    
    // function vratiNiz(niz) {

//     let noviNiz = [];
    
//     for(i=0; i < niz.length; i++){
//         noviNiz[i] = niz[i];
        
       
//         }
//         return noviNiz
        
// }

// console.log(vratiNiz([1,2,3,4,532]))
  

//   function array(numbers){
//     let numbers1 = [];  
//     for(i = 0; i < numbers.length; i++){
//            numbers1[i] = numbers[i]
//     }
//       return numbers1
//   }

//  console.log(array([10,20,30,40,50,60,70,80,90,100]))



// function vratiNiz(niz) {

//     let noviNiz = [];
    
//     for(i=0; i < niz.length; i++){
//         noviNiz[i] = niz[i];
        
       
//         }
//         return noviNiz
        
// }

// console.log(vratiNiz([1,2,3,4,532]))

// function summation(num) {

//     let sum = 0;
    
//     for(let i = 1; i <= num; i++){
       
//        sum = sum + i;
//     }
//         return sum; 
//   }

//   console.log(summation(10))


//   //aj mi pojasni ovu funkciju
//   const summation = n => n * (n + 1) / 2;

// function getAverage(scoreArray){
    
//     let sum = 0;
//     let count = scoreArray.length;
    
//     for(let i = 0; i < scoreArray.length; i++){
        
//         sum += scoreArray[i]
       
        
//     }
//     return Math.floor(sum/count) 
   
//   }

//  console.log(getAverage([1,2,3,42,76,2457,82]))

//  function even_or_odd(number){
//     return number % 2 ? "Odd"  : "Even"  
//  }

//  console.log(even_or_odd(5))

//  function countSheeps(arrayOfSheep) {
   //input = array of sheeps - values are bolean 
   //output = number of sheeps present in the array
   //var counts
//    let count = 0;
//     for(let i =  0; i < arrayOfSheep.length; i++){
//      if(arrayOfSheep[i]===true){
     
//        count += 1;
//      }
     
//    }
//    return count;
//  }

//  console.log(countSheeps([true,true,true,true,true]));


// function getAverage(marks){
//   let count = marks.length;
//   let sum = 0;
  
//   for(let i = 0; i < count; i ++){
//     sum = sum + marks[i]
//   }
//   const avg = sum/count;
//   const roundDown = Math.floor(avg)
  
//   return roundDown;
// }


// const rps = (p1, p2) => {
//   if(p1 == p2){
//     return 'Draw';
//   }
    
  
//   if (p1 == 'rock' && p2 == 'scissors')
//     return 'Player 1 won!'
//   else if(p1 == 'scissors' && p2 == 'paper')
//     return  'Player 1 won!'
//   else if(p1 == 'paper' && p2 == 'rock')
//     return  'Player 1 won!'
//   else 
//     return 'Player 2 won!'
  
// }

// console.log(rps('scissors', 'rock'))

// function removeChar(str){
 
//   return str.substring(1,str.length - 1)

// };

// const removeChar = str => str.slice(1,-1)

// function removeChar(str){

//    str1 = str.split('');
//    str1.shift();
//    str1.pop();
//    return str1.join('');
     
//  };


//  function positiveSum(arr) {
  
//   let sum = 0;
  
//   for(i = 0; i < arr.length; i++){
//     if(arr[i] > 0){
//        sum = sum + arr[i]
//     }
    
//   }
//   return sum
  
// }


// console.log(positiveSum([2,3,5,7,8]))


// function printIsDivisible3(num){
//   if(num % 3 === 0){
//     console.log(num)
//   }
//   else{
//     console.log(`Num is not divisible by 3`)
    
//   }
// }

// console.log(printIsDivisible3(9))

// function printIsDivisible3(num){
//   if(num % 3 == 0){
//       return (`Број ${num} је дељив са 3`)
//   }
//   if(num % 3 !== 0){
//       return (`Број ${num} није дељив са 3`)
// }

// }

// console.log(printIsDivisible3(2))


// function sumRange(n,m){
//   while(n < m){
//     n++
//   }
//   return n
// }

// console.log(sumRange(5,7))

// function positiveSum(arr) {
  
//   sum = 0;
  
//   for(i = 0; i < arr.length; i++){
//     if(arr[i] > 0){
//        sum = sum + arr[i]
//     }
  
//   }
//    return sum
// }

// function positiveSum(arr) {
//   return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
// }


// function basicOp(operation, value1, value2)
// {
  
//   let result;
  
//   switch(operation){
//       case '+':
//       return result = value1 + value2;
//       break;
//       case '-':
//       return result = value1 - value2;
//       break;
//       case '/':
//       return result = value1 / value2;
//       break;
//       case '*':
//       return result = value1 * value2;
//       break;
//   }
//   return result;
// }

// function basicOp(operation, value1, value2){
//   const operationString = value1 + operation + value2;
//   const result = eval(operationString)
//   return result
// }

// console.log(basicOp('*',5,6))



// function noSpace(x){
//   return x.split('').join('')
// }

// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))


// function repeat_str(string, no){

//   count = '';

//   for (let i = 0; i < no; i++) {
//    count = count + " " + string
//   }

//   return count

// }

// console.log(repeat_str("Misha", 6))

// function repeat_str(string, no){

//   let count = string.repeat(no);
  

//   return count

// }

// console.log(repeat_str("Misha", 6))


function stringToArray(string){

  return string.split('').join('')

  
}

console.log(stringToArray('lkjlkj werwr ewrwer werwer'))

function maps(arr){

const result = arr.map((arrItem) => {
  return arrItem * 2
})
  return result
}  

console.log(maps([1,2,3,4]))




 


 



 

 






