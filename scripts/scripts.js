let emptyArray=[];
let askUser;
let arraySum=0;

do{
    askUser = +prompt('Enter number');
    if (Number.isInteger(askUser)) {
        emptyArray.push(askUser);
    } else {
        console.log('That was not a number!');
    }
    console.log('Prompt was: '+ askUser,Number.isInteger(askUser));
}while(Number.isInteger(askUser));


for (const index of emptyArray){
    arraySum += index;
    console.log('Our sum: '+arraySum);

}
if (emptyArray.length !== 0){
    alert(`The sum fo all you typed is: ${arraySum}`)
}