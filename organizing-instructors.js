const organizeInstructors = function(instructors) {
  let sortedInstructors = {};
  //evaluate array of objects by course and create keys for "sortedInstructors"
  for (let i = 0; i < instructors.length; i++) {
    //if key element exist add name to that key; if it doesnt create new key and add name to that key
    if (instructors[i].course in sortedInstructors) {
      sortedInstructors.instructors[i].course.push(instructors[i].name)
    } else {
      sortedInstructors.instructors[i].course = [];
      sortedInstructors.instructors[i].course.push(instructors[i].name)

    }
  }
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));