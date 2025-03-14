// Code your solutions in this file
for (let age = 30; age<40; age++){
   console.log(`I'm ${age} years old. Happy birthday to me!`);
   
}
const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts){
    for(let i=0; i<gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
      
    }
    return gifts;
}
wrapGifts(gifts);

function writeCards(names, eventName){
    let messages = [];
    for (let i=0; i<names.length; i++){
        let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
    messages.push(message);
    }
    return messages;
}
console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

function countDown(count){
while (count>=0){
console.log(count);
count--
}
}
countDown(10)