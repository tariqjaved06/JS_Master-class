//Sets are iterables its elements are unique and order in set is irrelevent
const orderSet = new Set([
  'pasta',
  'pizza',
  'pizza',
  'Rissotto',
  'pasta',
  'pizza',
]);

console.log(orderSet);

console.log(new Set('Jonas'));

console.log(orderSet.size);
console.log(orderSet.has('pizza'));//same like include
console.log(orderSet.has('bread'));

orderSet.add('Garlic Bread')
orderSet.add('Garlic Bread')
orderSet.delete('Rissotto')
// orderSet.clear();
console.log(orderSet);

for (const Order of orderSet) {
  console.log(Order);
}

//Example 

const staff = ['Waiter' , 'Chef' , 'Waiter' , 'Manager' , 'Chef' , 'Waiter']

const staffUnique = [...new Set(staff)]
console.log(staffUnique);
console.log(new Set(staff).size);

console.log(new Set('JonasSchmedtmann').size);

//------Set Operation----------
const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
  ]);
  
//Get common elements of the both set
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection:', commonFoods);
console.log('Intersection', [...commonFoods]);

//Union of elements
const italionMexicanFusion = italianFoods.union(mexicanFoods);
console.log('Union', italionMexicanFusion);
console.log([...new Set([...italianFoods, ...mexicanFoods])]);

//Difference
const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log('Difference Italian', uniqueItalianFoods);
const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log('Difference Mexican:', uniqueMexicanFoods);

//Difference + Unique
const uniqueItalianMexicanFoods = italianFoods.symmetricDifference(mexicanFoods)
console.log(uniqueItalianMexicanFoods);

//DIsjoint
console.log(italianFoods.isDisjointFrom(mexicanFoods));