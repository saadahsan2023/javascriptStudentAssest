# JavaScript Objects

---

## **1. What is an Object?**

An object is a collection of properties, where each property is a key-value pair. Keys are strings (or Symbols), and values can be any data type.

### Example:

```javascript
const person = {
  name: "Hassan", // String property
  age: 30, // Number property
  isStudent: true, // Boolean property
  greet: function () {
    // Function (method)
    console.log("Hello, " + this.name);
  },
};
```

---

## **2. Creating Objects**

There are multiple ways to create objects:

### **a. Object Literal**

```javascript
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};
```

### **b. Using `Object.create()`**

```javascript
const prototypeObj = {
  greet() {
    console.log("Hello from prototype");
  },
};
const obj = Object.create(prototypeObj);
obj.name = "John";
obj.greet(); // Hello from prototype
```

---

## **3. Accessing Properties**

### **a. Dot Notation**

```javascript
console.log(person.name); // "John"
```

### **b. Bracket Notation**

```javascript
console.log(person["age"]); // 30
```

---

## **4. Adding and Updating Properties**

### Adding a New Property

```javascript
person.city = "New York";
```

### Updating an Existing Property

```javascript
person.age = 31;
```

---

## **5. Deleting Properties**

```javascript
delete person.isStudent;
console.log(person); // { name: "John", age: 31, city: "New York" }
```

---

## **6. Checking Properties**

### Using the `in` Operator

```javascript
console.log("name" in person); // true
console.log("country" in person); // false
```

### Using `hasOwnProperty()`

```javascript
console.log(person.hasOwnProperty("name")); // true
```

---

## **7. Iterating Over Properties**

### Using `for...in`

```javascript
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
```

### Using `Object.keys()`

```javascript
console.log(Object.keys(person)); // ["name", "age", "city"]
```

### Using `Object.values()`

```javascript
console.log(Object.values(person)); // ["John", 31, "New York"]
```

### Using `Object.entries()`

```javascript
console.log(Object.entries(person)); // [["name", "John"], ["age", 31], ["city", "New York"]]
```

---

## **8. Methods in Objects**

Objects can have functions as properties, called methods.

### Example:

```javascript
const person = {
  name: "John",
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};
person.greet(); // Hello, my name is John
```

---

## **9. Object Destructuring**

Extract properties into variables.

```javascript
const { name, age } = person;
console.log(name); // "John"
console.log(age); // 31
```

---

## **10. Spread and Rest Operators**

### Spread Operator (`...`)

Used to copy or merge objects.

```javascript
const personCopy = { ...person, country: "USA" };
console.log(personCopy);
```

### Rest Operator (`...`)

Used to collect the remaining properties.

```javascript
const { name, ...rest } = person;
console.log(rest); // { age: 31, city: "New York" }
```

---

## **11. Freezing and Sealing Objects**

### `Object.freeze()`

Prevents modifications.

```javascript
Object.freeze(person);
person.name = "Doe"; // No effect
console.log(person.name); // "John"
```

### `Object.seal()`

Prevents adding/removing properties but allows modification.

```javascript
Object.seal(person);
person.age = 32; // Allowed
console.log(person.age); // 32
```

---

## **13. Practical Example**

### Object with Methods and Dynamic Properties

```javascript
const student = {
  firstName: "Ali",
  lastName: "Khan",
  grades: [80, 85, 90],
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  averageGrade() {
    const total = this.grades.reduce((sum, grade) => sum + grade, 0);
    return total / this.grades.length;
  },
};
console.log(student.fullName()); // Ali Khan
console.log(student.averageGrade()); // 85
```

---

This condensed guide covers the essential aspects of JavaScript objects to help you teach effectively. Focus on the examples to make concepts clear!
