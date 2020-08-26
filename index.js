// Code your solutions in this file

function writeCards(array, event){
  let newarry=[] 
  for (let i=0; i<array.length; i++){
    newarry[i]=`Thank you, ${array[i]}, for the wonderful ${event} gift!`
  }
   return  newarry
}

function countDown(int){
  let i=0
  while(int>i){
    console.log(int--)
  }
}

