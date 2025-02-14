// arrays.js

// ---------------------------
// Activity 1: Map - Steps to List
// ---------------------------
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`; // the HTML string made from step
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#stepsList").innerHTML = stepsHtml.join(""); // set the innerHTML

// ---------------------------
// Activity 2 & 3: Map and Reduce - Grades to GPA
// ---------------------------
const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}
const gpaPoints = grades.map(convertGradeToPoints);

// Calculate GPA
const pointsTotal = gpaPoints.reduce((total, item) => total + item, 0);
const gpa = pointsTotal / gpaPoints.length;

// Display the GPA points and GPA in the gradesOutput element
document.querySelector("#gradesOutput").innerHTML = `
  <p>GPA Points: ${gpaPoints.join(", ")}</p>
  <p>GPA: ${gpa}</p>
`;
console.log("GPA:", gpa);

// ---------------------------
// Activity 4: Filter - Short Words
// ---------------------------
const words = ["watermelon", "peach", "apple", "tomato", "grape"];
// Using arrow function for filtering words shorter than 6 characters:
const shortWords = words.filter(word => word.length < 6);

// Create HTML list items for the short words:
const shortWordsHtml = shortWords.map(word => `<li>${word}</li>`).join("");
document.querySelector("#wordsList").innerHTML = shortWordsHtml;

// ---------------------------
// Activity 5: indexOf - Find Lucky Number
// ---------------------------
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);

// Display the result for the lucky number:
document.querySelector("#luckyOutput").innerHTML = `
  <p>Lucky number ${luckyNumber} is at index ${luckyIndex}.</p>
`;


