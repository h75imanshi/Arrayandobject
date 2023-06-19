//answer//
let studentRecords = [{ name: 'John', id: 123, marks: 98 },
{ name: 'Baba', id: 101, marks: 23 },
{ name: 'yaga', id: 200, marks: 45 },
{ name: 'Wick', id: 115, marks: 75 }
]
studentRecords.map((item, index) => {
    console.log(item);
})


//answer1//
let names1 = [];
for (let index = 0; index < studentRecords.length; index++) {
    names1.push(studentRecords[index].name.toUpperCase());
}
console.log(names1);


// answer 2//
let names = studentRecords.filter(stu => stu.marks > 50);
console.log(names);

//answer 3//
let names2 = studentRecords.filter(stu => stu.marks > 50 && stu.id > 120)
console.log(names2);

// answer 4//
let totalMarks = studentRecords.reduce(((acc, emp) => acc + emp.marks), 0)
console.log(totalMarks);

//answer5//
let names3 = studentRecords.filter(stu => stu.marks > 50).map(stu => stu.name)
console.log(names3);
// answer6//
let totalMarks2 = studentRecords.filter(stu => stu.id > 120).reduce((acc, curr) => acc + curr.marks, 0)
console.log(totalMarks2);

// answer7//
let studentRecords1 = [{ name: 'John', id: 123, marks: 98 },
{ name: 'Baba', id: 101, marks: 23 },
{ name: 'John', id: 200, marks: 45 },
{ name: 'Wick', id: 115, marks: 75 },]
let totalMarks1 = studentRecords1.map(function (stu) {
    if (stu.marks < 50) {
        stu.marks += 15;
    }
    return stu;
}).filter(stu => stu.marks > 50).reduce((acc, curr) => acc + curr.marks, 0);
console.log(totalMarks1);


// answer8//
const studentRecords3 = [
    { name: 'John', class: 'A', rollNo: 1 },
    { name: 'Baba', class: 'B', rollNo: 2 },
    { name: 'Yaga', class: 'A', rollNo: 3 },
    { name: 'Wick', class: 'C', rollNo: 4 },
    { name: 'Emma', class: 'B', rollNo: 5 },
    { name: 'Oliver', class: 'A', rollNo: 6 }
  ];
  for (const student of studentRecords3) {
    console.log(`Name: ${student.name}`);
    console.log(`Class: ${student.class}`);
    console.log(`Roll No: ${student.rollNo}`);
    console.log('------------------------');
  }