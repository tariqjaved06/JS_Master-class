//----Fundamentals of Maps----
//In maps the key have any datatype

const rest = new Map();
rest.set('name', 'Classico Italino');
rest.set(1, ' Firenze , italy');
rest.set(2, 'Lisban, Portugal');
console.log(rest.set(2, 'Lisban, Portugal'));

rest
  .set(' categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'we are cloased');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear()
const arr = [1,2]
rest.set(arr, 'Test');

rest.set(document.querySelector('h1'))
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));