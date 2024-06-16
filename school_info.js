const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
      math: { teachers: 5, students: 150 },
      science: { teachers: 4, students: 120 },
      history: { teachers: 3, students: 100 },
      english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
      {
        name: "Alice",
        className: "Grade 5",
        scores: { math: 95, science: 88, history: 85, english: 92 },
      },
      {
        name: "Bob",
        className: "Grade 4",
        scores: { math: 80, science: 78, history: 92, english: 85 },
      },
      {
        name: "Charlie",
        className: "Grade 5",
        scores: { math: 88, science: 90, history: 78, english: 88 },
      },
      {
        name: "Diana",
        className: "Grade 4",
        scores: { math: 92, science: 85, history: 88, english: 90 },
      },
    ],
  };
const {departments}=school
let ans={}
// for(let key in departments){
//     if(key==='math' || key==='science'){
//         ans[key+"TeachersCount"]=departments[key].teachers;
//         ans[key+"StudentsCount"]=departments[key].students;
//         // console.log(ans)
//     }
// }
let tcount=departments.math.teachers;
let tcount1=departments.science.teachers;
let scount=departments.math.students;
let scount1=departments.science.students;

ans.mathTeachersCount=tcount;
ans.scienceTeachersCount=tcount1;
ans.mathstudentsCount=scount;
ans.sciencestudentsCount=scount1;
console.log(ans)