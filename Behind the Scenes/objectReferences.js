'strict'
//Deep Copy vs Shallow Copy
//after declaring the object with const we donot change the object we change the properties value of it 
const jessica1 = {
  firstName : 'Jessica',
  lastName : 'Williams',
  age: 27,
};


function marriedPerson(originalPerson , newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson
}
const marriedJessica  = marriedPerson(jessica1 , 'Davis')
// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';

console.log('Before:',jessica1);
console.log('After:',marriedJessica);


const jessica = {
  firstName : 'Jessica',
  lastName : 'Williams',
  age: 27,
  family : ['Alice' , 'Bob']
};

//-----------Shallow Copy-----------------

// in this we make the copy of the original object and use it then i can update only the copy not the original one and but in array same thing happen before because this object because even after copying the object the family gives reference to same array(object)
const jessicaCopy = {...jessica}
jessicaCopy.lastName = 'Davis'
console.log(jessica , jessicaCopy)

// jessicaCopy.family.push('Mary')
// jessicaCopy.family.push('John')

// console.log('Before:',jessica);
// console.log('After:',jessicaCopy);
//-------------Deep Copy or Deep Clone-------------

const jessicaClone = structuredClone(jessica)

jessicaClone.family.push('Mary')
jessicaClone.family.push('John')

console.log('Original:',jessica);
console.log('AfterClone:',jessicaClone);