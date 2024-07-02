//Return total marks for students with marks greater than 80,,,
//after 20 marks have added to those who scored less than 80

//1. return students < 80

//2. add 20 marks to their original mark

//3. compare all the marks and return who are greater than 80 (AFTER THE PREVIOUS OPERATION)

let students = [
    { name: "Lisa", age: 26, mark: 100},
    { name: "Jiso", age: 30, mark: 70},
    { name: "Jennie", age: 27, mark: 90},
    { name: "Rose", age: 28, mark: 60},
];

let sumMarks = students.map((sumMark) => {
    if (sumMark.mark < 80) {
        sumMark.mark += 20;
    }
    return sumMark;
}).filter((sumMark) => sumMark.mark > 80).reduce((acc, curr) => acc + curr.mark, 0);

console.log(sumMarks);