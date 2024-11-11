// 1-mashq

// Person interfeysi
interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}

// Person obyekt
const person1: Person = {
  name: "John Doe",
  age: 25,
  isStudent: false
};

// Book interfeysi
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

// Book obyekt
const book1: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925
};


// 2-mashq

// 1. Sonlar massivi
const numbers: number[] = [1, 2, 3, 4, 5];

// 2. Yig'indi hisoblovchi funksiya
const sumArray = (arr: number[]): number => arr.reduce((sum, num) => sum + num, 0);
console.log(sumArray(numbers));

// 3. So'zlar massivi
const words: string[] = ["apple", "banana", "cherry"];

// 4. Katta harf qaytaruvchi funksiya
const capitalizeWords = (arr: string[]): string[] => arr.map(word => word.toUpperCase());
console.log(capitalizeWords(words));


// 3-mashq

// StudentRecord tuple
const studentRecord: [string, number, boolean] = ["Alice", 22, true];

// Coordinate tuple
const coordinate: [number, number] = [10, 20];


// 4-mashq

// 1. `any` turidagi o'zgaruvchi
let randomValue: any = "Hello";
randomValue = 42;
randomValue = true;

// 2. `any` massiv va qiymatlarni chiqarish
const mixedArray: any[] = ["text", 123, true];
const printArray = (arr: any[]) => arr.forEach(item => console.log(item));
printArray(mixedArray);


// 5-mashq

// 1. `unknown` turidagi o'zgaruvchi
let uncertainValue: unknown = "Hello";
uncertainValue = 42;

// 2. `unknown` turidagi qiymatni `string` ga o'zgartirishdan oldin tekshirish
const safeString = (value: unknown): string => {
  if (typeof value === "string") {
    return value;
  }
  return "Not a string";
};
console.log(safeString(uncertainValue));


// 6-mashq

// 1. addNumbers funksiyasi
const addNumbers = (a: number, b: number): number => a + b;

// 2. formatDate funksiyasi
const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = (`0${date.getMonth() + 1}`).slice(-2);
  const day = (`0${date.getDate()}`).slice(-2);
  return `${year}-${month}-${day}`;
};


// 7-mashq 

// DaysOfWeek enum
enum DaysOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

// printDay funksiyasi
const printDay = (day: DaysOfWeek): void => {
  console.log(DaysOfWeek[day]);
};


// 8-mashq 

// Person va Employee interfeyslari
interface Employee {
  employeeId: number;
  department: string;
}


// 9-mashq 

// Vehicle interfeysi
interface Vehicle {
  make: string;
  model: string;
  year: number;
}

// Car interfeysi (Vehicle'ni kengaytirish)
interface Car extends Vehicle {
  numberOfDoors: number;
  isElectric: boolean;
}

// Car obyekt
const myCar: Car = {
  make: "Tesla",
  model: "Model S",
  year: 2024,
  numberOfDoors: 4,
  isElectric: true
};


// 10-mashq

// Address type alias
type Address = {
  street: string;
  city: string;
  postalCode: string;
};

// PersonWithAddress type alias
type PersonWithAddress = Person & { address: Address };

// PersonWithAddress obyekt
const personWithAddress: PersonWithAddress = {
  name: "Mark",
  age: 28,
  isStudent: true,
  address: {
    street: "Main St",
    city: "Springfield",
    postalCode: "12345"
  }
};


// 11-mashq

// Student interfeysi
interface Student {
  name: string;
  age: number;
  grades: number[];
  address: [string, number];
}

// getStudentSummary funksiyasi
const getStudentSummary = (student: Student): string => {
  const avgGrade = student.grades.reduce((a, b) => a + b) / student.grades.length;
  return `Name: ${student.name}, Age: ${student.age}, Average Grade: ${avgGrade.toFixed(2)}`;
};


// 12-mashq

// OrderStatus enum
enum OrderStatus {
  Pending,
  Shipped,
  Delivered,
  Cancelled
}

// Order interfeysi
interface Order {
  orderId: number;
  status: OrderStatus;
  totalAmount: number;
}

// Customer interfeysi
interface Customer {
  customerId: number;
  name: string;
}

// CustomerOrder tipi
type CustomerOrder = Order & Customer;

// CustomerOrder obyekt
const order1: CustomerOrder = {
  orderId: 456,
  status: OrderStatus.Shipped,
  totalAmount: 150.00,
  customerId: 789,
  name: "Sarah"
};
