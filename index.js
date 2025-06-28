let message=[];

function writeCards(stringNames,eventName){
for(let i=0;i<stringNames.length ;i++){
  message.push(`Thank you, ${stringNames[i]}, for the wonderful ${eventName} gift!`)
}
  return message
}

function countDown(number){
for(let i=number;i>=0;i--){
  console.log(i)
}
return countDown
}