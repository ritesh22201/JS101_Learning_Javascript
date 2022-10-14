let sum = 0;
let count = 0;
let arr = [1,4,6,7,9,12,13,14,21,24];
for(let i = 0; i<=arr.length-1; i++){
  if(arr[i]%2==0){
    sum = sum + arr[i];
    count++;
  } 
}
    console.log(sum/count);