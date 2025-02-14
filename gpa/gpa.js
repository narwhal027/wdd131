// Function to get grades from the input box, split them into an array,
// trim extra spaces, and convert each grade to uppercase.
function getGrades(inputSelector) {
    // Get the raw input value from the specified element
    const grades = document.querySelector(inputSelector).value;
    // Split the string into an array using comma as the separator
    const gradesArray = grades.split(",");
    // Clean up each grade: remove extra spaces and convert to uppercase
    const cleanGrades = gradesArray.map((grade) => grade.trim().toUpperCase());
    console.log("Clean Grades:", cleanGrades);
    return cleanGrades;
  }
  
  // Function to look up the GPA point value for a given letter grade
  function lookupGrade(grade) {
    let points = 0;
    if (grade === "A") {
      points = 4;
    } else if (grade === "B") {
      points = 3;
    } else if (grade === "C") {
      points = 2;
    } else if (grade === "D") {
      points = 1;
    }
    // For any unrecognized grade (including F or invalid input), points remain 0
    return points;
  }
  
  // Function to calculate the GPA from an array of letter grades
  function calculateGpa(grades) {
    // Convert each letter grade to its corresponding GPA points
    const gradePoints = grades.map((grade) => lookupGrade(grade));
    // Sum up the GPA points using reduce; using 0 as the initial value
    const totalPoints = gradePoints.reduce((total, num) => total + num, 0);
    // Calculate GPA by dividing the total points by the number of grades
    const gpa = totalPoints / gradePoints.length;
    // Return the GPA rounded to 2 decimal points
    return gpa.toFixed(2);
  }
  
  // Function to output the GPA into an HTML element specified by the selector
  function outputGpa(gpa, selector) {
    const outputElement = document.querySelector(selector);
    outputElement.innerText = gpa;
  }
  
  // Click handler for the button: gets the grades, calculates the GPA, and outputs it.
  function clickHandler() {
    // Retrieve the array of cleaned-up grades
    const grades = getGrades("#grades");
    // Calculate the GPA from the grades array
    const gpa = calculateGpa(grades);
    // Display the GPA in the HTML element with id "output"
    outputGpa(gpa, "#output");
  }
  
  // Add an event listener to the button so that when it is clicked, clickHandler runs.
  document.querySelector("#submitButton").addEventListener("click", clickHandler);