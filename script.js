// 1. Declare Arrays:
let arr = [1, "2", "string", 4, 5];
console.log(arr);

// 2. Access Arrays:
let firstElement = arr[0];
let [, secondElement, thirdElement, fourthElement] = arr;
let lastElement = arr[arr.length - 1];

console.log(firstElement);
console.log(secondElement);
console.log(thirdElement);
console.log(fourthElement);
console.log(lastElement);

// 3. Use Array Properties:
let numberOfElements = arr.length;
console.log(numberOfElements);

// 4. Array Methods:
// .push() = Add new element(s) to the end:
arr.push("sixthElement", 7);
console.log(arr);

// .pop() = Remove the last element:
arr.pop();
console.log(arr);

// .shift() = Remove the first element:
arr.shift();
console.log(arr);

// .unshift()= Add new element(s) to the beginning:
arr.unshift("firstElement", 11);
console.log(arr);

// .splice() = Modify an element in place:
arr.splice(1, 1);
console.log(arr);

arr.splice(2, 1, "new3rd");
console.log(arr);

// 5. Iterate Through Arrays:
for (let i = 0; i < arr.length; i++) {console.log(arr[i]);}

for (const element of arr) {console.log(element);}

arr.forEach((v, i) => {
    console.log(`index of ${v} is: ${i}`);
})

// 6. Array Destructuring:
let [arrElement1, arrElement2] = arr;
const [, , ...rest] = arr;
console.log(arrElement1);
console.log(arrElement2);
console.log(rest);
console.log(arr);
