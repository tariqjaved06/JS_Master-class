//-----------------Leacture Function------------------

//Function hold one or more than one lines of code it can be pass and return the data

function logger() {
    console.log('My name is Jonas');
}


logger();//invoking/running/calling the function
logger();
logger();


function fruitProcessor(apples , oranges) {
    console.log(apples , oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const applejuice = fruitProcessor(5 , 0);
console.log(applejuice);

const appleOrangeJuice = fruitProcessor(2,4)
console.log(appleOrangeJuice);