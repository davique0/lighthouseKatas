const organizeInstructors = function(instructors) {
  let sortedInstructors = {};
  let valueInInstructors = '';
  for (let i = 0; i < instructors.length; i++) {
    valueInInstructors = instructors[i].course;
    if (sortedInstructors[valueInInstructors] === undefined) {
      sortedInstructors[valueInInstructors] = [];
      sortedInstructors[valueInInstructors].push(instructors[i].name);
    } else {
      sortedInstructors[valueInInstructors].push(instructors[i].name);
    }
  }
  return sortedInstructors;
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