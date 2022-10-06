/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

// const arr = [1,2,3,4,5]

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

// const person = {
//     name: "David",
//     surname: "Nitu",
//     email: "davidnitu44@gmail.com",
//     age: 21
// }

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

// person.hasDrivingLicense = true;
// console.log(person.hasDrivingLicense)

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

// delete person.age;
// console.log(person.age)

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

// const person2 = {
//     name: "Don",
//     surname: "Noel",
//     email: "don@gmail.com"
// }

// console.log(person.email === person2.email)

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

// let total;
// let shippingFee = 10;
// const totalShoppingCart = 51    ;
// const minPromoValue = 50;

// if(totalShoppingCart >= minPromoValue) {
//     shippingFee = 0;
//     total = totalShoppingCart + shippingFee;

//     console.log("Shipping Fee: " + shippingFee)
//     console.log("Total is: " + total)
// } else {
//     total = totalShoppingCart + shippingFee;

//     console.log("Shipping Fee: " + shippingFee)
//     console.log("Total is: " + total)
// }

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

// let total;
// let shippingFee = 10;
// const blkFridayDiscount = 20;
// const minPromoValue = 50;

// const totalShoppingCart = 65;
// const discountedTotal =  totalShoppingCart - ((blkFridayDiscount / 100) * totalShoppingCart);

// console.log("Discounted Total: " + discountedTotal)

// if(discountedTotal >= minPromoValue) {
//     shippingFee = 0;
//     total = discountedTotal + shippingFee;

//     console.log("Shipping Fee: " + shippingFee)
//     console.log("Total is: " + total)
// } else {
//     total = discountedTotal + shippingFee;

//     console.log("Shipping Fee: " + shippingFee)
//     console.log("Total is: " + total)
// }

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

const mainCar = {
    brand: "Ford",
    model: "Mustang",
    licensePlate: "BM1234"
}

const car1 = {...mainCar, licensePlate: "BM4256"}
const car2 = {...mainCar, licensePlate: "BM5266"}
const car3 = {...mainCar, licensePlate: "BM8797"}
const car4 = {...mainCar, licensePlate: "BM2354"}
const car5 = {...mainCar, licensePlate: "BM5674"}


/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

const carsForRent = [
    car1,
    car2,
    car3,
    car4,
    car5
]


/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

carsForRent.shift();
carsForRent.pop();

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

// console.log(typeof mainCar, typeof mainCar.brand, typeof mainCar.licensePlate);

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

const carsforSale = [];
carsforSale.push({brand: "Audi", model: "TT"},{brand: "BMW", model: "120d"},{brand: "Mecrcedes", model: "Class C"})

// console.log(carsforSale)

const totalCars = carsforSale.length + carsForRent.length;

// console.log("Total car no: " + totalCars)

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

for(let i = 0; i < carsforSale.length; i++) {
    console.log("Car No: " + i)
    console.log(carsforSale[i].brand)
    console.log(carsforSale[i].model)
}