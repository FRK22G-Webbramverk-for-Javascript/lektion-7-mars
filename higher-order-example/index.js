const todos = [
    { todo: 'Köp kaffe', done: false },
    { todo: 'Brygg kaffe', done: false },
    { todo: 'Drick kaffe', done: false }
]

// ---- Map ----

// Map-metoden returnerar en ny array
const newTodoArray = todos.map((todo) => {
    return todo.todo;
});

console.log(todos);
console.log(newTodoArray);

// Samma sak fast med en for-loop
// for (let i = 0; i < todos.length; i++) {
//     console.log(todos[i]);
// }

// Samma sak fast med en forEach
// todos.forEach((todo) => {
//     console.log(todo);
// })

// Map-metoden använder sig av en callback (alltså en funktion som skickas med i en annan funktion)
// På samma sätt som en addEventListener nedan
// document.addEventListener('click', () => {
    
// });

// ---- Filter ----

let persons = [
    { name: 'Ada', age: 28 },
    { name: 'Alice', age: 14 },
    { name: 'Christopher Robin', age: 12 },
    { name: 'Glenn', age: 47 }
]


let filteredPersons = persons.filter((person) => {
    if (person.age > 20) {
        return person;
    }
});

console.log(filteredPersons);

// let filteredPersons = [];

// for(let i = 0; i < persons.length; i++) {
//     if (persons[i].age > 20) {
//         filteredPersons.push(persons[i]);
//     }
// }

// console.log(filteredPersons);