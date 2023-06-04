const people = [
    {name: 'Владислав', age: 26, budget:35000},
    {name: 'Олег', age: 21, budget:28000},
    {name: 'Станислав', age: 25, budget:11000},
    {name: 'Ичиго', age: 16, budget:32000},
    {name: 'Синдзи', age: 13, budget:65000},
    {name: 'Асука', age: 42, budget:25000},
]

// Обычный перебор
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i])
// }
// Тот же самый результат
// forOf
// for (let person of people) {
//     console.log(person)
// }


// Метод массива forEach
// people.forEach(function (person){
//     console.log(person)
// })

// Обращаемся к самому массиву people.forEach()
// вызываем функцию внутри метода forEach(function(){})
// внутрь функции передаем значения person : передает вложенный объект -- {name: 'Владислав', age: 26, budget: 35000} и так по всему массиву
// index -- 0 позиция в массиве
// pArr - сам массив, вернет весь массив
// Можно задать только 1 параметр и получить перебор массива
//  people.forEach((person)=> console.log(person))
// Через стрелочную функцию



// Метод Map
// принимает параметры сам элемент, индекс и массив
// С помощью Map создаем новые массивы
// const newPeople = people.map(person => {
//     return person
// })
//
// console.log(newPeople)

// Метод Filter
// const adults = people.filter(person => {
//     if (person.age >= 18){
//         return true
//     }
// })
// Сокращенная запись со стрелочной функцией
// Новый массив = массив.филтр(параметр =>(функция) условие (если возвращает true записывает в новый массив))
const adults = people.filter(person => person.age >= 18)

console.log(adults)