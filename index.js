// Code your solutions in this file
function writeCards(name,eveName){
    const newCard=[]
    for(let i=0;i<name.length;i++) {
       newCard[i]= `Thank you, ${name[i]}, for the wonderful ${eveName} gift!`;
    }
    return newCard;
} 

//console.log (writeCards(["Charlie", "Samip", "Ali"], "birthday"));

function countDown(intValue){
    let i=0;
    while (i <= intValue) {
        console.log (i++);
    }
}
//countDown(11)