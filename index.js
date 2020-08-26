// Code your solutions in this file

function writeCards(array, event){
  let newarry=[] 
  for (let i=0; i<array.length; i++){
    newarry=newarry.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
  }
   return  newarry
}
