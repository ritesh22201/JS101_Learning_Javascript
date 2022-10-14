//Problem 2 : Given a character in lower case print the upper case character
let char = "d";
let lower_case = ["a","b","c","d","e","f"];
let upper_case = ["A","B","C","D","E","F"];

 for(let i = 0; i<=lower_case.length-1; i++){
   if(char==lower_case[i]){
     char=upper_case[i];
     break;
   }
 }
   console.log(char);
