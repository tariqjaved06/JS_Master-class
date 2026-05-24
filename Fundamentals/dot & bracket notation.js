//-----------------Leacture Dot vs Bracket Notation ----------------

const jonas = {
    firstName : 'Jonas',
    lastName : 'Schematmann',
    age : 2037 - 1991,
    job : 'teacher',
    friends : ['Micheal' , 'Steven' , 'Peter']
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey); in the dot notation 

const interestedIn = prompt('What do you want to know about jonas choose between firstName , lastName , age,job and friends')
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);   
}else{
    console.log('Wrong Request! choose between firstName , lastName , age,job and friends');
}
jonas.location = 'Protugal'
jonas['twitter'] ="@jonasschmedtman"
console.log(jonas);

//Challenge:
//"Jonas has three friends his best friend is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends ,and his best friend is called ${jonas.friends[0]}`);

